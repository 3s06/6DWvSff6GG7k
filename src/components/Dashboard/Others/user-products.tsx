"use client";
import { getUserProductsAction } from "@/actions/user-data/get-products";
import type { Product } from "@/types/products";
import Link from "next/link";
import { useEffect, useState } from "react";
export function UserProducts() {
    
    const [ products, setProducts ] = useState<Product[]>([]);
    const [ error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await getUserProductsAction();
            if (result.success) {
                setProducts(result.products)
            }   else {
                setError(result.error)
            }
        }

        fetchProducts();
    }, [])

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (products.length === 0) {
        return <div>No products found.</div>;
    }

    
    return (
        <div className="flex">
                <div className="w-full h-auto flex flex-col">
                     {products.map((produto) => (
                        <Link href={`/dashboard/products/${produto.id}`} key={produto.titulo} className="grid grid-cols-5 p-2 py-3 hover:bg-neutral-50 border-neutral-400 border-b">
                            <span className="text-sm font-medium text-black/70 dark:text-white">{produto.id}</span>
                            <p className="text-sm font-medium text-black/70 dark:text-white">{produto.titulo}</p>
                            <p className="text-sm font-medium text-black/70 dark:text-white">{produto.tipo}</p>
                            <p className="text-sm font-medium text-black/70 dark:text-white">{produto.status === "DESATIVADO" ? "Desativado" : "Ativado"}</p>
                        </Link>
                    ))}
                </div>
           
        </div>
    )
}