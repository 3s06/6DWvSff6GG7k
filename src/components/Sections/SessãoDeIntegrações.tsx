import { MdDashboard } from "react-icons/md";

export function SessãoDeIntegrações() {
    return (
        <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-lg mb-10">
                <div className="border border-white/30 rounded-full px-2 py-1 flex items-center justify-center">
                    <div className="rounded-full border border-white/30 text-white flex items-center justify-center size-7 mr-1 ">
                        <MdDashboard size={15} />
                    </div>
                    <span className="text-white tracking-tight font-medium">Integrações</span>
                </div>
                <div className="flex flex-col items-center gap-y-[20px]">
                    <h1 className="text-white text-center tracking-tight font-semibold text-[3rem] sm:text-[3.75rem] leading-[3rem] sm:leading-[3.5rem]">Integre seu negócio com
                    diversas ferramentas.</h1>
                    <p className="text-center text-sm sm:text-base text-white/60 font-semibold tracking-tight">Nossa plataforma permite conexões fáceis e eficientes com as principais ferramentas do mercado</p>
                </div>
            </div>
            <div className="relative w-full overflow-hidden">
                {/* Gradientes nas laterais */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

                {/* Carrossel animado */}
                <div className="flex animate-carousel whitespace-nowrap gap-x-[10px] mb-5">
                    {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-x-[10px]">
                        {Array.from({ length: 6 }).map((_, j) => (
                        <div key={j} className="w-[250px] shrink-0">
                            <img
                            src="https://textiful.com/theme/dist/assets/img/logos/Mailchimp_Logo-Horizontal_White.png"
                            alt=""
                            className="w-full h-full object-contain"
                            />
                        </div>
                        ))}
                    </div>
                    ))}
                </div>
                <div className="flex animate-carousel whitespace-nowrap gap-x-[10px]">
                    {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-x-[10px]">
                        {Array.from({ length: 6 }).map((_, j) => (
                        <div key={j} className="w-[250px] shrink-0">
                            <img
                            src="https://textiful.com/theme/dist/assets/img/logos/Mailchimp_Logo-Horizontal_White.png"
                            alt=""
                            className="w-full h-full object-contain"
                            />
                        </div>
                        ))}
                    </div>
                    ))}
                </div>
            </div>

        </section>
    )
} 