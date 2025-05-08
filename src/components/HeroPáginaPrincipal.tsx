import Link from "next/link";
import { FaRegHandPeace } from "react-icons/fa6";

export function HeroPáginaPrincipal() {
    return (
        <section className="w-full mx-auto flex flex-col items-center justify-center gap-y-[20px]">
            <div className="flex flex-col items-center gap-2 gap-y-[25px] text-center w-full max-w-[852px]">
                <h1 className="text-[3.5rem] sm:text-[5rem] tracking-tight text-white font-semibold leading-[3.75rem] sm:leading-[5rem]">Tudo que você precisa para viver do digital.</h1>
                <div className="flex items-center justify-center w-full max-w-lg text-center">
                    <p className="text-white/80 font-medium tracking-tight text-pretty text-[1rem] sm:text-[1.25rem] leading-[1.25rem]">Deixe de lado aquela lista enorme de ferramentas e passe a vender produtos físicos e digitais em um só lugar.</p>
                </div>
            </div>
            <button className="flex items-center justify-center gap-x-[20px]">
                <Link href={"/signin"} className="bg-white outline outline-white/10 px-4 py-2 rounded-full text-black font-medium hover:bg-white/70 transition-colors flex items-center justify-center">
                    <span>Fazer Login</span>
                </Link>
                <Link href={"/signup"} className="bg-white outline outline-white/10 group px-4 py-2 rounded-full text-black font-medium hover:bg-white/70 transition-colors flex items-center justify-center">
                    <span className="mr-1">Começar a vender</span>
                    <FaRegHandPeace className="group-hover:rotate-45 transition-all ease-in-out duration-300" size={20} />
                </Link>
            </button>
        </section>
    )
}