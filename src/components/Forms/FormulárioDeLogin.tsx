import Link from "next/link";

export function FormulárioDeLogin() {
    return (
        <form className="flex items-start flex-col w-full gap-y-[10px]"> 
            <div className="flex flex-col items-start w-full">
                <label htmlFor="" className="text-base text-white font-medium mb-2">Seu e-mail</label>
                <input type="text" placeholder="name@exemplo.com" className="bg-white/10 rounded-lg text-white px-6 py-[10px] w-full placeholder:text-white/30" />
            </div>
            <div className="flex flex-col items-start w-full">
                <label htmlFor="" className="text-base text-white font-medium mb-2">Seu senha</label>
                <input type="text" placeholder="******" className="bg-white/10 rounded-lg text-white px-6 py-[10px] w-full placeholder:text-white/30" />
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-start">

                </div>
                <div className="flex items-start">
                    <Link href={"/signup"} className="text-sm text-white/80 font-medium hover:underline hover:underline-ofeset-6">
                        Ainda não tem uma conta? Criar uma
                    </Link>
                </div>
            </div>
            <button className="w-full py-[12px] rounded-lg bg-white flex items-center justify-center">
                <span className="font-medium text-black">Continuar</span>
            </button>
        </form>
    )
}