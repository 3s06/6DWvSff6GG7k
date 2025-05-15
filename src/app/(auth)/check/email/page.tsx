"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SymbolValora } from "@/components/Icons/SvgValora";
import { VerifyEmailUser } from "@/actions/auth/verify-email";
import { RiLoader2Line } from "react-icons/ri";
import { BiError } from "react-icons/bi";

export default function CheckEmailPage() {
    const params = useSearchParams();
    const router = useRouter();
    const [status, setStatus] = useState<"verificando" | "verificado" | "erro" | "aguardando">("aguardando");

    useEffect(() => {
        const userId = params.get("userId");
        const secret = params.get("secret");

        if (userId && secret) {
            setStatus("verificando");

            async function Load() {
                const success = await VerifyEmailUser(userId!, secret!);
                if (success) {
                    setStatus("verificado");
                    setTimeout(() => router.push("/dashboard"), 2000);
                } else {
                    setStatus("erro");
                }
            }

            Load(); // <- chamada da função
        }
    }, [params, router]);

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
                        {status === "verificando" && (
                            <>
                                <div className="flex flex-col py-5">
                                    <h1 className="text-[2.75rem] leading-[2.5rem] text-black font-medium">
                                        Verificando seu e-mail...
                                    </h1>
                                </div>
                                <div className="flex gap-1">
                                    <RiLoader2Line size={20} className="animate-spin" />
                                    <p className="font-medium text-black/70 text-base">
                                        Aguarde um instante.
                                    </p>
                                </div>
                            </>
                        )}

                        {status === "verificado" && (
                            <>
                                <div className="flex flex-col py-5">
                                    <h1 className="text-[2.75rem] leading-[2.5rem] text-black font-medium">
                                        E-mail verificado com sucesso!
                                    </h1>
                                </div>
                                <div className="flex gap-1">
                                    <RiLoader2Line size={20} className="animate-spin" />
                                    <p className="font-medium text-black/70 text-base">
                                        Estamos te redirecionando para o Dashboard.
                                    </p>
                                </div>
                            </>
                        )}

                        {status === "erro" && (
                            <>
                                <div className="flex flex-col py-5">
                                    <h1 className="text-[2.75rem] leading-[2.5rem] text-black font-medium">
                                        Oops! Algo deu errado.
                                    </h1>
                                </div>
                                <div className="flex gap-1">
                                    <BiError size={20} className="text-red-600" />
                                    <p className="font-medium text-red-600 text-base">
                                        Houve um erro ao verificar seu e-mail. Tente novamente. Caso o erro persista, contate o{" "}
                                        <Link
                                            href={"/suporte"}
                                            className="font-medium hover:text-red-500 hover:underline hover:underline-offset-6"
                                        >
                                            suporte
                                        </Link>.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
