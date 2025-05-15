import { ChartLineIcon } from "./ui/chart-line";
import { MdArrowBack } from "react-icons/md";
import { HandCoinsIcon } from "./ui/hand-coins";
import TiposDeVendasFake from "./Charts/TiposDeVendasFake";
import ReceitaTotalFake from "./Charts/ReceitaTotalFakeExemple";

import TopVenndas from "./Charts/TopVendas";
export function SessãoDeRelatorios() {
    return (
        <section className="bg-white w-full min-h-screen mx-auto gap-y-[10px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-xl mt-20 mb-20">
                <div className="border border-black/30 rounded-full px-2 py-1 flex items-center justify-center">
                    <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                        <ChartLineIcon size={15} />
                    </div>
                    <span className="text-black tracking-tight font-medium">Analytics</span>
                </div>
                <div className="flex flex-col items-center gap-y-[20px] w-full mb-5">
                    <h1 className="text-black text-center tracking-tight font-semibold text-[3rem] sm:text-[3.75rem] leading-[3rem] sm:leading-[3.5rem]">Acompanhe suas < br/>vendas em tempo real.</h1>
                    <p className="text-center text-sm sm:text-base text-black/60 font-semibold tracking-tight">Na Valora, você acompanha seus indicadores em tempo real e toma decisões de forma precisa.</p>
                </div>
                <div className="flex flex-col items-center gap-y-[20px]">
                    <div className="relative border border-blue-400/50 w-[380px] sm:w-[1200px] h-[580px] sm:h-[570px] flex flex-col p-[40px] bg-gradient-to-t from-blue-500 via-blue-400/5 to-white rounded-lg gap-[32px] overflow-hidden">
                        <div className="flex items-start w-full flex-col max-w-[660px]">
                            <h1 className="text-black font-semibold tracking-tight text-2xl">Dashboard</h1>
                            <p className="text-base text-gray-500 tracking-tight font-medium">
                            Na Valora, você gerencia seu negócio por uma Dashboard completa e inovadora, tendo em destaque um checkout ao vivo para monitorar suas vendas em tempo real e otimizar conversões.
                            </p>
                        </div>

                        <div className="absolute -bottom-45 left-0 right-0 mx-auto flex items-start flex-col justify-start rounded-2xl rounded-b-none bg-white h-[600px] w-[1120px] border border-blue-400 outline outline-white/10 p-6">
                            <div className="w-full flex items-start gap-x-[10px] mb-5">
                                <div className="size-4 rounded-full bg-blue-200 "/>
                                <div className="size-4 rounded-full bg-blue-200 "/>
                                <div className="size-4 rounded-full bg-blue-200 "/>
                            </div>
                            <div className="grid grid-cols-3 gap-x-[10px]">
                                <ReceitaTotalFake />
                                <TiposDeVendasFake />
                                <TopVenndas />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-y-[20px] sm:gap-y-0 gap-x-[10px]">
                        <div className="relative border border-indigo-400/50 w-[380px] sm:w-[592px] h-[580px] sm:h-[570px] flex flex-col p-[40px] bg-gradient-to-t from-indigo-500 via-indigo-400/5 to-white rounded-lg gap-[32px] overflow-hidden">
                            <div className="flex items-start w-full flex-col max-w-[660px]">
                                <h1 className="text-black font-medium tracking-tight text-2xl">Recuperador de vendas</h1>
                                <p className="text-base text-neutral-600 tracking-tight font-medium">
                                Tenha uma lista completa das vendas abandonadas, envie lembretes personalizados e converta carrinhos esquecidos em oportunidades e clientes satisfeitos.
                                </p>
                            </div>
                            <div className="absolute -bottom-65 left-10 rounded-2xl right-0 w-[960px] h-[659px] bg-white border-indigo-400/60 border p-8">
                                <div className="w-full flex items-start gap-x-[10px] mb-5">
                                    <div className="size-3 rounded-full bg-indigo-100 "/>
                                    <div className="size-3 rounded-full bg-indigo-100 "/>
                                    <div className="size-3 rounded-full bg-indigo-100 "/>
                                </div>
                                <div className="flex items-center justify-start mb-2">
                                    <MdArrowBack size={22} className="text-black mr-2.5" />
                                    <span className="text-black text-2xl tracking-tight font-medium">Vendas</span>
                                </div>
                                <div className="border border-indigo-300 bg-indigo-100 rounded-xl rounded-b-none p-4 w-full gap-x-[50px] flex items-start px-5">
                                    <span className="text-black text-lg font-semibold tracking-tight">Produto</span>
                                    <span className="text-black text-lg font-semibold tracking-tight">Valor</span>
                                    <span className="text-black text-lg font-semibold tracking-tight">Cliente</span>
                                </div>
                                <div className="bg-white flex flex-col w-full h-full items-start p-2 overflow-y-scroll">
                                    <div className="bg-white flex items-start justify-start gap-x-[20px] hover:bg-indigo-200 w-full h-auto border-indigo-200/50 border-t py-5">
                                        <span className="text-black text-md tracking-tight font-medium">Produto 1</span>
                                        <span className="text-black/60 text-md tracking-tight font-medium">R$ 500,00 </span>
                                        <span className="text-neutral-600 text-md tracking-tight font-medium">Raul Silva</span>
                                    </div>
                                    <div className="bg-white flex items-start justify-start gap-x-[20px] hover:bg-indigo-200 w-full h-auto border-indigo-200/50 border-t py-5">
                                        <span className="text-black text-md tracking-tight font-medium">Produto 2</span>
                                        <span className="text-black/60 text-md tracking-tight font-medium">R$ 150,00 </span>
                                        <span className="text-neutral-600 text-md tracking-tight font-medium">Davi Brito</span>
                                    </div>
                                    <div className="bg-white flex items-start justify-start gap-x-[20px] hover:bg-indigo-200 w-full h-auto border-indigo-200/50 border-t py-5">
                                        <span className="text-black text-md tracking-tight font-medium">Produto 3</span>
                                        <span className="text-black/60 text-md tracking-tight font-medium">R$ 50,00 </span>
                                        <span className="text-neutral-600 text-md tracking-tight font-medium">Jair Bolsonaro</span>
                                    </div>
                                    <div className="bg-white flex items-start justify-start gap-x-[20px] hover:bg-indigo-200 w-full h-auto border-indigo-200/50 border-t py-5">
                                        <span className="text-black text-md tracking-tight font-medium">Produto 4</span>
                                        <span className="text-black/60 text-md tracking-tight font-medium">R$ 370,00 </span>
                                        <span className="text-neutral-600 text-md tracking-tight font-medium">Neymar  Júnio</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative border border-emerald-400/50 w-[380px] sm:w-[592px] h-[580px] sm:h-[570px] flex flex-col p-[40px] bg-gradient-to-t from-emerald-500 via-emerald-400/5 to-white rounded-lg gap-[32px] overflow-hidden">
                            <div className="flex items-start w-full flex-col max-w-[660px]">
                                <h1 className="text-black font-medium tracking-tight text-2xl">Recuperador de vendas</h1>
                                <p className="text-base text-neutral-600 tracking-tight font-medium">
                                Tenha uma lista completa das vendas abandonadas, envie lembretes personalizados e converta carrinhos esquecidos em oportunidades e clientes satisfeitos.
                                </p>
                            </div>
                            <div className="absolute -bottom-65 left-10 rounded-2xl right-0 w-[960px] h-[659px] bg-white border-emerald-400/50 border p-8">
                                <div className="w-full flex items-start gap-x-[10px] mb-5">
                                    <div className="size-3 rounded-full bg-emerald-100 "/>
                                    <div className="size-3 rounded-full bg-emerald-100 "/>
                                    <div className="size-3 rounded-full bg-emerald-100 "/>
                                </div>
                                <div className="flex items-center justify-start mb-2">
                                    <MdArrowBack size={23} className="text-black mr-2.5" />
                                    <span className="text-black text-2xl tracking-tight font-medium">Vendas</span>
                                </div>
                                <div className="bg-white flex flex-col gap-[10px] w-full h-full items-start border border-emerald-400/50 rounded-2xl p-4 overflow-y-scroll">
                                    <div className="flex gap-[5px]">
                                        <div className="bg-white hover:bg-emerald-200 rounded-2xl px-3 py-2 flex items-start justify-start border border-emerald-100 hover:border-emerald-300">
                                            <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 size-10 rounded-xl flex items-center justify-center mr-2.5">
                                                <HandCoinsIcon size={22} />
                                            </div>
                                            <div className="flex flex-col items-start justify-start">
                                                <div className="flex items-start justify-start w-full">
                                                    <span className="text-black tracking-tight font-semibold">Vendas Abandondas</span>
                                                </div>
                                                <p className="text-xs text-neutral-500 hover:text-emerald-300">Analise as taxas e as causas das vendas não finalizadas.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white hover:bg-emerald-200 rounded-2xl px-3 py-2 flex items-start justify-start border border-emerald-100 hover:border-emerald-300">
                                            <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 size-10 rounded-xl flex items-center justify-center mr-2.5">
                                                <HandCoinsIcon size={22} />
                                            </div>
                                            <div className="flex flex-col items-start justify-start">
                                                <div className="flex items-start justify-start w-full">
                                                    <span className="text-black tracking-tight font-semibold">Vendas Abandondas</span>
                                                </div>
                                                <p className="text-xs text-neutral-500 hover:text-emerald-300">Analise as taxas e as causas das vendas não finalizadas.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[5px]">
                                        <div className="bg-white hover:bg-emerald-200 rounded-2xl px-3 py-2 flex items-start justify-start border border-emerald-100 hover:border-emerald-300">
                                            <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 size-10 rounded-xl flex items-center justify-center mr-2.5">
                                                <HandCoinsIcon size={22} />
                                            </div>
                                            <div className="flex flex-col items-start justify-start">
                                                <div className="flex items-start justify-start w-full">
                                                    <span className="text-black tracking-tight font-semibold">Receita por Produto</span>
                                                </div>
                                                <p className="text-xs text-neutral-500 hover:text-emerald-300">Descubra como cada produto está performando.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white hover:bg-emerald-200 rounded-2xl px-3 py-2 flex items-start justify-start border border-emerald-100 hover:border-emerald-300">
                                            <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 size-10 rounded-xl flex items-center justify-center mr-2.5">
                                                <HandCoinsIcon size={22} />
                                            </div>
                                            <div className="flex flex-col items-start justify-start">
                                                <div className="flex items-start justify-start w-full">
                                                    <span className="text-black tracking-tight font-semibold">Vendas Abandondas</span>
                                                </div>
                                                <p className="text-xs text-neutral-500 hover:text-emerald-300">Analise as taxas e as causas das vendas não finalizadas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}