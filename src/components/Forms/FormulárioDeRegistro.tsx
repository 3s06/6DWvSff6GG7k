"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaRegistroStep1, SchemaRegistroStep2, SchemaRegistroStep3 } from "@/schemas/signup";
import { Step1FormRegistro, Step2FormRegistro, Step3FormRegistro } from "@/types/auth";
import { signup } from "@/actions/auth/signup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export function FormulárioDeRegistro() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  
  const [step1Data, setStep1Data] = useState<Step1FormRegistro | null>(null);
  const [step2Data, setStep2Data] = useState<Step2FormRegistro | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const PrimeiroPassoFormulario = useForm<Step1FormRegistro>({
    resolver: zodResolver(SchemaRegistroStep1),
    defaultValues: {
      nome: "",
      sobrenome: "",
    },
  });

  const SegundoPassoFormulario = useForm<Step2FormRegistro>({
    resolver: zodResolver(SchemaRegistroStep2),
    defaultValues: {
      email: "",
      telefone: "",
    },
  });

  const TerceiroPassoFormulario = useForm<Step3FormRegistro>({
    resolver: zodResolver(SchemaRegistroStep3),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const formatarTelefone = (valor: string) => {
    return valor
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d{1,4})/, "$1-$2")
      .slice(0, 15);
  };

  const onStep1Submit = PrimeiroPassoFormulario.handleSubmit((data) => {
    setStep1Data(data);
    setStep(2);
  });

  const onStep2Submit = SegundoPassoFormulario.handleSubmit((data) => {
    setStep2Data(data);
    setStep(3);
  });

  const onStep3Submit = TerceiroPassoFormulario.handleSubmit((data) => {
    if (!step1Data || !step2Data) return;

    startTransition(async () => {
      try {
        const result = await signup({
          ...step1Data,
          ...step2Data,
          password: data.password,
        });

        if (result.error) {
          setError(result.error);
        } else {
          window.location.href = "/verify";
        }
      } catch {
        setError("Ocorreu um erro inesperado");
      }
    });
  });

  return (
    <form
      className="flex flex-col gap-y-4 w-full"
      onSubmit={
        step === 1
          ? onStep1Submit
          : step === 2
          ? onStep2Submit
          : onStep3Submit
      }
    >
      {step === 1 && (
        <>
          <div className="flex flex-col w-full">
            <label className="text-base text-black font-medium mb-2">
              Seu nome
            </label>
            <input
              type="text"
              placeholder="Davi"
              {...PrimeiroPassoFormulario.register("nome")}
              className="bg-black/10 rounded-lg text-black px-6 py-2 w-full placeholder:text-black/30"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-base text-black font-medium mb-2">
              Seu sobrenome
            </label>
            <input
              type="text"
              placeholder="Silva"
              {...PrimeiroPassoFormulario.register("sobrenome")}
              className="bg-black/10 rounded-lg text-black px-6 py-2 w-full placeholder:text-black/30"
            />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex flex-col w-full">
            <label className="text-base text-black font-medium mb-2">
              Seu email
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              {...SegundoPassoFormulario.register("email")}
              className="bg-black/10 rounded-lg text-black px-6 py-2 w-full placeholder:text-black/30"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-base text-black font-medium mb-2">
              Seu telefone
            </label>
            <input
              type="tel"
              placeholder="(11) 91234-5678"
              {...SegundoPassoFormulario.register("telefone")}
              onChange={(e) => {
                const value = formatarTelefone(e.target.value);
                SegundoPassoFormulario.setValue("telefone", value);
              }}
              className="bg-black/10 rounded-lg text-black px-6 py-2 w-full placeholder:text-black/30"
            />
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex flex-col w-full relative">
            <label className="text-base text-black font-medium mb-2">
              Senha
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              {...TerceiroPassoFormulario.register("password")}
              className="bg-black/10 rounded-lg text-black px-6 py-2 w-full placeholder:text-black/30 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[42px] text-xl text-black/60"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <div className="flex flex-col w-full relative">
            <label className="text-base text-black font-medium mb-2">
              Confirmar senha
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              {...TerceiroPassoFormulario.register("confirmPassword")}
              className="bg-black/10 rounded-lg text-black px-6 py-2 w-full placeholder:text-black/30 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-[42px] text-xl text-black/60"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
        </>
      )}

      <div className="w-full flex justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
            className="text-black/70 text-sm hover:underline"
          >
            Voltar
          </button>
        )}
        <Link
          href="/signin"
          className="text-sm text-black/80 font-medium hover:underline"
        >
          Já tem uma conta? Entrar
        </Link>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-black text-white font-medium"
        disabled={isPending}
      >
        {step < 3 ? "Continuar" : "Finalizar cadastro"}
      </button>
    </form>
  );
}
