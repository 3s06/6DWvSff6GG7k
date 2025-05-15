import { z } from "zod";

const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export const SchemaDeRegistro = z.object({
    nome: z.string().min(3).max(20),
    sobrenome: z.string().min(3).max(20),
    telefone: z.string().regex(telefoneRegex, "Telefone inválido"),
    email: z.string().email(),
    password: z.string().min(8),
});

export const SchemaRegistroStep1 = z
.object({
    nome: z.string().min(3, "Username must be at least 3 characters").max(20),
    sobrenome:  z.string().min(3, "Username must be at least 3 characters").max(20),
});

export const SchemaRegistroStep2 = z.
object({
    email: z.string().email("Invalid email addres"),
    telefone: z.string().regex(telefoneRegex, "Telefone inválido"),
});

export const SchemaRegistroStep3 = z
.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});