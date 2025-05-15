"use server";
import { CreateClient } from "@/lib/server/appwrite";
import { SchemaDeLogin } from "@/schemas/signin";
import { cookies } from "next/headers";
import { z } from "zod";

export async function signin(formData: { email: string; password: string }) {
    try {

        const DataValidada = SchemaDeLogin.parse(formData);
        const { account } = await CreateClient();
    
        const session = await account.createEmailPasswordSession(
          DataValidada.email,
          DataValidada.password
        );
    
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
          if (error.message.includes("user_invalid_credentials")) {
            return { error: "E-mail ou senha inválidos" };
          }
          if (error.message.includes("user_not_found")) {
            return { error: "Usuário não encontrado" };
          }
        }
        console.log("Erro ao fazer Login", error)
        return { error: "Falha ao fazer login" };
    }
}