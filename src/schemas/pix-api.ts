import { z } from "zod";

export const PixRequestSchema = z.object({
  amount: z
    .number({ required_error: "Informe o valor da cobrança" })
    .min(1, "O valor deve ser maior que 0"),
  customer: z.object({
    name: z
      .string({ required_error: "Nome é obrigatório" })
      .min(1, "Nome é obrigatório"),

    document: z
      .string({ required_error: "CPF/CNPJ é obrigatório" })
      .min(11, "Documento inválido")
      .max(14, "Documento inválido")
      .regex(/^\d+$/, "O documento deve conter apenas números"),
  }),
});
