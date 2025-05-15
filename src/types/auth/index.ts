import {z} from "zod";
import { SchemaDeLogin } from "@/schemas/signin";
import { SchemaRegistroStep1, SchemaRegistroStep2, SchemaRegistroStep3 } from "@/schemas/signup";

/** @description Types do Formulário de Registro */ 
export type Step1FormRegistro = z.infer<typeof SchemaRegistroStep1>;
export type Step2FormRegistro = z.infer<typeof SchemaRegistroStep2>;
export type Step3FormRegistro = z.infer<typeof SchemaRegistroStep3>;

/** @descrition Types do Formulário de Login */
export type LoginFormData = z.infer<typeof SchemaDeLogin>;