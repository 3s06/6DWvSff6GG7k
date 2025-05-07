import Link from "next/link";
import type { Metadata } from "next";
import { MdOutlineWebhook } from "react-icons/md";
import { FormulárioDeLogin } from "@/components/Forms/FormulárioDeLogin";

export const metadata: Metadata = {
    title: 'Faça login para continuar - Gateway',
    description: 'Simplifique seu processo de venda e acelere seu desempenho conosco!'
}

export default function PáginaDeLogin() {
    return (
        <div className="w-full min-h-screen flex bg-black">
            <section className="w-full mx-auto flex flex-col items-center justify-center p-4 sm:p-0">
                <header className="absolute top-0 right-0 left-0 p-4 w-full flex items-start">
                    <Link href={"/"} className="flex items-start">
                        <span className="text-4xl sm:text-2xl text-white font-medium">Gateway</span>
                    </Link>
                </header>
                <div className="flex flex-col items-center gap-y-[15px] justify-center w-full max-w-md">
                    <div className="flex items-start flex-col w-full">
                        <div className="flex flex-col py-5">
                            <h1 className="text-[2.75rem] leading-[2.5rem] text-white font-medium ">Bem-vindo a Gateway. Faça login para continuar.</h1>
                        </div>
                        <p className="font-medium text-white/80 text-base ">Simplifique seu processo de venda e acelere seu desempenho conosco!</p>
                    </div>
                    {/* Formulário */}
                    <FormulárioDeLogin />
                    <div className="abolsute bottom-0 flex items-start w-full">
                        <p className="text-sm text-center text-white/60">Ao fazer login você concorda com nossos{""} <Link href="/terms/service" className="hover:underline hover:underline-offset-4">Termos de Serviço</Link> {""} e {""} <Link href="/terms/privacy" className="hover:underline hover:underline-offset-4">Políticas de Privacidade</Link>.</p>
                    </div>
                </div>
            </section>
            <section className="relative w-full max-h-screen max-auto hidden sm:flex items-center justify-center">
                <div className="absolute z-10 bottom-[90px] flex flex-col items-center justify-center ">
                    <div className="flex items-cente text-center py-5">
                        <h1 className=" text-md font-medium text-white">Integre seu negócio com diversas ferramentas.</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-5 ">
                        <div className="flex items-center ">
                            <MdOutlineWebhook size={38} className="text-white mr-1" />
                            <span className="text-white text-3xl font-medium">Webhook</span>
                        </div>
                        <img className="w-[160px]" src="https://textiful.com/theme/dist/assets/img/logos/Mailchimp_Logo-Horizontal_White.png" alt="" />
                        <img className="w-[110px]" src="https://cdn-images-1.medium.com/max/918/1*4tsd6Y1X6voScubSnB3agQ@2x.png" alt="" />
                    </div>
                </div>
                <div className="absolute bottom-0 bg-linear-to-t from-black to-transparent h-full w-full"></div>
                <div className="absolute bottom-0 bg-linear-to-t from-black to-transparent h-full w-full"></div>
                <div className="absolute bottom-0 bg-linear-to-t from-black to-transparent h-full w-full"></div>
                <img className="w-full max-h-screen" src="https://media.discordapp.net/attachments/1329545705705967729/1369340951553900594/raw.png?ex=681b81a3&is=681a3023&hm=b5fcbba35418f55fad9fe23175fd78ef61b08a7dec139b240668e78194f385e2&=&format=webp&quality=lossless&width=438&height=438" alt="" />
            </section>
        </div>
    )
};