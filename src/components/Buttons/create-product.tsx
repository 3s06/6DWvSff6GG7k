'use client'

import { useState } from 'react'
import { PlusIcon } from "lucide-react"
import { BlocksIcon } from "@/components/ui/blocks";
import { MdClose } from 'react-icons/md';
import { Badge } from '../ui/badge';
import { TiInfoLarge } from "react-icons/ti";
import { CreateProducForm } from '../Forms/create-product';
import { BoxesIcon } from "@/components/ui/boxes";

export function CreateProducButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<"digital" | null>(null)
    const [step, setStep] = useState<1 | 2>(1)

    const handleContinue = () => {
        if (selected === "digital") {
            setStep(2)
        }
    }

    return (
        <div className="relative w-full">
            <div className='flex items-start w-full justify-end'>
                <button onClick={() => { setIsOpen(true); setStep(1); setSelected(null) }} className="w-full max-w-[130px] sm:max-w-[260px] bg-indigo-500 hover:bg-indigo-400 cursor-pointer rounded-xl py-3 flex items-center justify-center">
                    <PlusIcon size={22} className="text-white dark:text-black mr-1 sm:mr-2" />
                    <span className="text-white font-medium tracking-tight ">Criar produto</span>
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 flex flex-col rounded-3xl shadow-lg w-[90%] max-w-md">
                        <div className='w-full flex items-start justify-between'>
                            <div className='flex flex-col'>
                                <h2 className='text-xl text-black font-semibold'>
                                    {step === 1 ? "Criar Produto" : "Detalhes do Produto Digital"}
                                </h2>
                                {step === 1 && (
                                    <p className="text-gray-700 text-sm mb-4">Escolha que tipo de produto deseja criar.</p>
                                )}
                            </div>
                            <button onClick={() => setIsOpen(false)} className='p-1 cursor-pointer hover:bg-black/10 rounded-full transition-all ease-linear duration-150'>
                                <MdClose size={22} className='text-black' />
                            </button>
                        </div>

                        {step === 1 ? (
                            <>
                                <div className='flex gap-2 flex-col w-full'>
                                    {/* Produto Digital */}
                                    <button
                                        onClick={() =>
                                            setSelected((prev) => (prev === "digital" ? null : "digital"))
                                        }
                                        className={`w-full py-5 flex items-center justify-center rounded-3xl border transition-colors duration-200 group cursor-pointer
                                            ${selected === "digital"
                                                ? "bg-indigo-50 border-indigo-200 dark:bg-indigo-950 dark:border-indigo-500"
                                                : "bg-white border-black/10 hover:bg-indigo-50 hover:border-indigo-200 dark:bg-neutral-900 dark:border-white/10 dark:hover:bg-indigo-950 dark:hover:border-indigo-500"
                                            }`}
                                    >
                                        <BlocksIcon
                                            size={35}
                                            className={`mr-2 transition-colors
                                                ${selected === "digital"
                                                    ? "text-indigo-600 dark:text-indigo-400"
                                                    : "text-neutral-400 group-hover:text-indigo-600 dark:text-neutral-500 dark:group-hover:text-indigo-400"
                                                }`}
                                        />
                                        <div className="flex flex-col items-start leading-tight space-y-[-2px]">
                                            <h1 className={`text-lg font-medium transition-colors
                                                ${selected === "digital"
                                                    ? "text-indigo-500 dark:text-indigo-400"
                                                    : "group-hover:text-indigo-500 dark:group-hover:text-indigo-400"
                                                }`}
                                            >
                                                Produto Digital
                                            </h1>
                                            <p className={`text-xs sm:text-sm font-normal transition-colors
                                                ${selected === "digital"
                                                    ? "text-indigo-400 dark:text-indigo-300"
                                                    : "text-black/60 group-hover:text-indigo-400 dark:text-white/60 dark:group-hover:text-indigo-300"
                                                }`}
                                            >
                                                Cursos online, e-books, arquivos, fotografias e imagens
                                            </p>
                                        </div>
                                    </button>
                                    {/* Produto Físico */}
                                    <button
                                        disabled
                                        className="w-full py-5 flex items-center justify-center rounded-3xl border border-black/10 cursor-not-allowed 
                                        bg-black/5 text-black/20 opacity-60"
                                    >
                                        <Badge className="absolute -translate-y-6 translate-x-30 sm:translate-x-36 bg-yellow-300 text-black rounded-full flex items-center gap-0.5 px-2 py-0.5 shadow-md border border-yellow-400 opacity-100">
                                            <TiInfoLarge size={26} className="text-black" />
                                            <span className="text-xs font-semibold">Em breve</span>
                                        </Badge>
                                        <BoxesIcon size={35} className="text-black/20 mr-2" />
                                        <div className="flex flex-col items-start leading-tight">
                                            <h1 className="text-lg font-medium">Produto Físico</h1>
                                            <p className="text-xs sm:text-sm font-normal text-black/30">
                                                Encapsulados, nutracêuticos, vitaminas e suplementos
                                            </p>
                                        </div>
                                    </button>
                                </div>

                                <button
                                    onClick={handleContinue}
                                    disabled={selected !== "digital"}
                                    className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-2xl disabled:bg-indigo-300 hover:bg-indigo-600 transition-colors ease-in-out duration-300 cursor-pointer"
                                >
                                    Continuar
                                </button>
                            </>
                        ) : (
                            <div className="w-full mt-4">
                                <CreateProducForm />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
