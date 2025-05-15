"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SymbolValora } from "@/components/Icons/SvgValora";
import { VerifyEmailUser } from "@/actions/auth/verify-email";

export default function VerifyEmailPage() {

    return (
        <div className="w-full min-h-screen flex bg-white">
        <section className="w-full mx-auto flex flex-col items-center justify-center p-4 sm:p-0">
            <header className="absolute top-0 right-0 left-0 p-4 w-full flex items-start">
                <Link href={"/"} className="flex items-start gap-0.5">
                    <SymbolValora className="fill-black w-[36px] h-[36px]" />
                    <span className="text-3xl sm:text-2xl text-black font-semibold">ValoraPay</span>
                </Link>
            </header>
            <div className="flex flex-col items-center gap-y-[15px] justify-center w-full max-w-md">
                <div className="flex items-start flex-col w-full">
                    <div className="flex flex-col py-5">
                        <h1 className="text-[2.75rem] leading-[2.5rem] text-black font-medium ">Um e-mail de verificação foi enviado. Por favor, verifique sua caixa de entrada.</h1>
                    </div>
                    <p className="font-medium text-black/70 text-base ">Obs: Caso não tenha encontrado o e-mail de verificação em sua caixa de entrada verifique a caixa de spam!</p>
                </div>
                {/* Formulário */}
                <Link href={"/signin"} className="w-full py-[12px] rounded-lg bg-black flex items-center justify-center">
                    <span className="text-white font-medium">Voltar para o íncio</span>
                </Link>
              
            </div>
        </section>
    </div>
    )
}