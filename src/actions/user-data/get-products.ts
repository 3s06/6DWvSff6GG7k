"use server";
import { CreateClient, PegarUsuarioLogado } from "@/lib/server/appwrite";
import { Query } from "node-appwrite";
import type { Product } from "@/types/products";
 

export async function getUserProductsAction() {
    
    const user = await PegarUsuarioLogado();
    if (!user || !user.$id) {
        return { success: false, error: "User not authenticated", products: [] };
    }

    const { databases, account } = await CreateClient();
    const DATABASE_ID =  process.env.DATABASE_ID as string;
    const PRODUCT_COLLECTION = process.env.PRODUCT_COLLECTION  as string;

    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            PRODUCT_COLLECTION,
            [Query.equal("ProdutorId", user?.$id)]
        )

        const products: Product[] = response.documents.map((doc) => ({
            $id: doc.$id,
            id: doc.Id,
            titulo: doc.Titulo,
            descricao: doc.Descricao,
            price: doc.Price,
            status: doc.Status,
            produtoId: doc.ProdutorId,
            createdAt: doc.CreatedAt,
            tipo: doc.Tipo,
            banner: doc.Banner,
        }));

        return { success: true, products };
    } catch (error: any) {
        console.error("Error fetching user products:", error);
        return { success: false, error: error.message, products: [] };
    }
 
}