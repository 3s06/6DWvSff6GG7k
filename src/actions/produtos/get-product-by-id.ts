"use server";

import { CreateClient } from "@/lib/server/appwrite";
import type { Product } from "@/types/products";

export async function getProductByIdAction(produtoId: string) {
    const { databases, account } = await CreateClient();
    const DATABASE_ID =  process.env.DATABASE_ID as string;
    const PRODUCT_COLLECTION = process.env.PRODUCT_COLLECTION  as string;

    try {
        const response = await databases.getDocument(
            DATABASE_ID,
            PRODUCT_COLLECTION,
            produtoId
        );

        const product: Product = {
            $id: response.$id,
            id: response.id,
            titulo: response.titulo,
            descricao: response.descricao,
            price: response.price,
            status: response.status,
            produtoId: response.produtoId,
            createdAt: response.createdAt,
            tipo: response.tipo,
            banner: response.banner,
        };

        return { success: true, product };
    } catch (error: any) {
        console.error("Error fetching product:", error);
        return { success: false, error: error.message, product: null };
    }

}