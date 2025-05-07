import Link from "next/link";

export function FormulárioDeRegistro() {
    return (
        <form className="flex items-start flex-col w-full gap-y-[10px]"> 
            <div className="flex flex-col items-start w-full">
                <label htmlFor="" className="text-base text-white font-medium mb-2">Seu nome</label>
                <input type="text" placeholder="Davi Brito" className="bg-white/10 rounded-lg text-white px-6 py-[10px] w-full placeholder:text-white/30" />
            </div>
            <div className="flex flex-col items-start w-full">
                <label htmlFor="" className="text-base text-white font-medium mb-2">Seu sobrenome</label>
                <input type="text" placeholder="Santos de Oliveira" className="bg-white/10 rounded-lg text-white px-6 py-[10px] w-full placeholder:text-white/30" />
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-start">

                </div>
                <div className="flex items-start">
                    <Link href={"/signin"} className="text-sm text-white/80 font-medium hover:underline hover:underline-ofeset-6">
                        Já tem uma conta? Faça login
                    </Link>
                </div>
            </div>
            <button className="w-full py-[12px] rounded-lg bg-white flex items-center justify-center">
                <span className="font-medium text-black">Continuar</span>
            </button>
        </form>
    )
}