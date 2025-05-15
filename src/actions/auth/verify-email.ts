"use server";

import { VerifcationClient } from "@/lib/server/appwrite";

export async function VerifyEmailUser(userId: string, secret: string) {
  const { accountVerify } = await VerifcationClient(); 
  try {
    /* Faz a verificaçã do e-mail do usuário */
    await accountVerify.updateVerification(userId, secret);
    return true;
  } catch (error) {
    console.error("Erro ao verificar o usuário:", error);
    return false;
  }
}
