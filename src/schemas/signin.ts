import { z } from "zod";

export const SchemaDeLogin = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" })
    .email("E-mail inválido"),
    
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" })
    .min(6, { message: "A senha precisa ter no mínimo 6 caracteres" }),
});
