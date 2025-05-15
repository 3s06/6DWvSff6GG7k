import Link from "next/link"
import { FaXTwitter, FaDiscord, FaInstagram, FaRegHandPeace } from "react-icons/fa6"
export function Footer() {
    return (
        <footer className="w-full px-0 sm:px-[10rem]  min-h-[190px] bg-white ">
            <div className="flex flex-col items-center gap-y-[5rem] sm:gap-y-[7rem] p-6">
                <div className="flex flex-col gap-y-[20px] sm:gap-y-0 sm:flex-row items-center w-full sm:gap-x-[27rem]">
                    <div className="flex flex-col ga-y-[20px] w-full max-w-sm">
                            <span className="text-[2.5rem] text-black tracking-tight font-semibold">Valora</span>
                            <p className="text-xl text-black text-md tracking-tight font-semibold">Seu negócio, seu fluxo. Com Valora.</p>
                    </div>
                    <div className="flex w-full  gap-x-[7rem]">
                        <div className="flex flex-col items-start text-start gap-y-[5px]">
                            <Link href="" className="text-black/85 hover:text-black transition-colors ease-in-out duration-300 text-lg font-medium">
                                Produtos
                            </Link>
                            <Link href="" className="text-black/85 hover:text-black transition-colors ease-in-out duration-300 text-lg font-medium">
                                Assinaturas
                            </Link>
                            <Link href="" className="text-black/85 hover:text-black transition-colors ease-in-out duration-300 text-lg font-medium">
                                Analytichs
                            </Link>
                            <Link href="" className="text-black/85 hover:text-black transition-colors ease-in-out duration-300 text-lg font-medium">
                                Integrações
                            </Link>
                        </div>
                        <div className="flex flex-col items-start text-start gap-y-[5px]">
                            <Link href="" className="text-black/85 hover:text-black transition-colors ease-in-out duration-300 text-lg font-medium">
                                Checkout Builder
                            </Link>
                            <Link href="" className="text-black/85 hover:text-black transition-colors ease-in-out duration-300 text-lg font-medium">
                                Depoimetentos
                            </Link>
                            <Link href="" className="text-black/85 hover:text-black transition-colors ease-in-out duration-300 text-lg font-medium">
                                Taxas
                            </Link>
                            <Link href="" className="text-black/85 hover:text-black transition-colors ease-in-out duration-300 text-lg font-medium">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-x-5 justify-between mb-10">
                    <div className="flex flex-col items-start gap-y-[5px]">
                        <span className="text-black/60 text-base font-semibold tracking-tight">Conecte-se com a gente!</span>
                        <div className="gap-x-[20px] flex items-center text-black/60">
                            <FaXTwitter size={25} />
                            <FaDiscord size={25} />
                            <FaInstagram size={25} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span className="text-md font-semibold tracking-tight text-black/60">Cadastre-se gratuitamente.</span>
                        <Link href={"/signup"} className="bg-black outline outline-black/60 group px-2 py-1 sm:px-4 sm:py-2 rounded-full text-white font-medium hover:bg-black/70 transition-colors flex items-center justify-center">
                            <span className="mr-1">Começar a vender</span>
                            <FaRegHandPeace className="group-hover:rotate-45 transition-all ease-in-out duration-300" size={20} />
                        </Link>
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <span className="text-md text-black/30 font-medium tracking-tight">©2025 Valora Pagamentos LTDA | Todos os direitos reservados </span>
                    <Link href="" className="text-md text-black/30 font-medium tracking-tight">Política de Privacidade</Link>
                    <Link href="" className="text-md text-black/30 font-medium tracking-tight">Termos de Uso</Link>
                </div>
                <div className="hidden sm:block relative -mt-16 h-60 w-full z-10">
                    <span className="absolute left-1/2 pointer-events-none -z-10 translate-x-[-50%] text-[348px] leading-none text-center font-bold before:content-['Valora'] before:bg-linear-to-b before:from-zinc-200 before:to-zinc-100/30 before:to-80% before:text-transparent before:bg-clip-text after:content-['Valora'] after:absolute after:inset-0 after:bg-zinc-300/70 after:text-transparent after:bg-clip-text after:[text-shadow:0_1px_0_white] after:mix-blend-darken"></span>
                </div>
            </div>
        </footer>
    )
}