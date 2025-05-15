"use server";

import { CreateClient , VerifcationClient } from "@/lib/server/appwrite";
import { ID } from "node-appwrite";
import { SchemaDeRegistro } from "@/schemas/signup";
import { z } from "zod"
import { cookies } from "next/headers";
import { randomBytes } from "crypto";
import { hash } from 'bcryptjs'
import { Resend } from 'resend'

export async function signup(formData: {
    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    password: string;
}) {
   
    try {
        const ValidaçãoZod = SchemaDeRegistro.parse(formData);
        const { account, databases } = await CreateClient();

        /* Criação do usuário no auth do Appwrite */
        const NomeDoUsuario = `${ValidaçãoZod.nome} ${ValidaçãoZod.sobrenome}`
        const NovoUsuário = await account.create(ID.unique(), ValidaçãoZod.email, ValidaçãoZod.password, NomeDoUsuario);

        /* Criação do client_id e client_secret do usuário */
        const ClientId = randomBytes(16).toString("hex");
        const ClientSecret = randomBytes(32).toString("hex");
        const HashedSecret = await hash(ClientSecret, 10);

        /* Criação do usuário no Banco de Dados */
        await databases.createDocument(
          process.env.DATABASE_ID!,
          process.env.COLLECTION_USERS!,
          ID.unique(),
          {
            Id: NovoUsuário.$id,
            Email: NovoUsuário.email,
            Nome: ValidaçãoZod.nome,
            Sobrenome: ValidaçãoZod.sobrenome,
            Telefone: ValidaçãoZod.telefone,
            Taxa: 2.5
          }
        );
        /* Criação das credenciais do usuário para API no Banco de Dados */
        await databases.createDocument(
          process.env.DATABASE_ID!,
          process.env.COLLECTION_API_KEYS!,
          ID.unique(),
          {
            Id: NovoUsuário.$id,
            ClientId: ClientId,
            ClientSecret: HashedSecret,
          }
        )

        const session = await account.createEmailPasswordSession(
          ValidaçãoZod.email,
          ValidaçãoZod.password
        );

        /* Envio do e-mail de verifcação para novos usuários */
        const { accountVerify } = await VerifcationClient(session.secret);
        await accountVerify.createVerification(
          `${process.env.NEXT_PUBLIC_APP_URL}/check/email`
        );

        /* Lógica de envio para novos usuários via Resend 
        \\
        const resend = new Resend(process.env.RESEND_KEY);
        resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'carneirolucassouza@gmail.com',
          subject: 'Hello World',
          html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
        \\
        */

        /* Salvamento da sessão criada nos Cookies */
        (await cookies()).set("Sess", session.secret, {
          path: "/",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });



        return { success: true };
    } catch (error) {
        if (error instanceof z.ZodError) {
          return { error: error.errors[0].message };
        }
        
        if (error instanceof Error) {
          if (error.message.includes("user_already_exists")) {
            return { error: "Email já registrado" };
          }
          if (error.message.includes("invalid_email")) {
            return { error: "Formato inválido de email" };
          }
        }
        
        console.log("Error ao criar o usuário", error)
        return { error: "Falha ao criar usuário" };
    }
}