'use client'

import { useState, FormEvent, useTransition } from 'react'
import { createProductAction } from '@/actions/produtos/create-product';

type ProductType = "Digital" | null;

export function CreateProducForm({ selectedType }: { selectedType: ProductType }) {
    const [ name, setName ] = useState("");
    const [description, setDescription] = useState("");
    const [, startTransition] = useTransition();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const result = await createProductAction(formData, selectedType);
        if (result.success) {
            startTransition(() => {
                window.location.reload();
            });
        } else {
            console.error("Failed to create product:", result.error);
         
        }
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1 items-start w-full">
            {/* Tipo do Produto (Read-only) */}
          {/*   <div className="flex flex-col gap-1 w-full">
                <label htmlFor="product-type" className='text-black'>Tipo do Produto</label>
                <input
                    type="text"
                    id="product-type"
                    value={selectedType || ""}
                    readOnly
                    className="focus:outline-none ml-4 w-full border border-black/30 rounded-2xl py-[10px] text-black placeholder:text-black/50"
                />
            </div> */}

            {/* Nome do Produto */}
            <div className="flex flex-col gap-1 w-full">
                <label htmlFor="product-name" className='text-black'>Nome do Produto</label>
                <div className="relative flex w-full border border-black/30 rounded-2xl py-[10px]">
                    <input
                        type="text"
                        id="product-name"
                        name="product-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="focus:outline-none ml-4 w-full text-black placeholder:text-black/50"
                        placeholder="Ex: Produto"
                    />
                </div>
            </div>

            {/* Descrição do Produto */}
            <div className="relative flex flex-col gap-1 w-full">
                <label htmlFor="description" className='text-black'>Descrição do Produto</label>
                <div className="relative flex w-full border border-black/30 rounded-2xl py-[10px]">
                    <textarea
                        id="description"
                        name="description"
                        maxLength={250}
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="focus:outline-none ml-4 w-full text-black placeholder:text-black/50 resize-y"
                        placeholder="Ex: Esse meu produto é muito bom"
                    ></textarea>
                </div>
                <div className="text-sm text-right w-full text-black/50 mt-1 pr-2">
                    {description.length} / 250 caracteres
                </div>
            </div>

            {/* Botão */}
            <button
                type="submit"
                className="mt-2 w-full max-w-md rounded-2xl py-[12px] bg-indigo-500 flex items-center justify-center"
            >
                <span className="text-white">Criar Produto</span>
            </button>
        </form>
    )
}
