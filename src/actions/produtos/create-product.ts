"use server";

import { CreateClient, PegarUsuarioLogado } from "@/lib/server/appwrite";
import { ID } from "node-appwrite";

/**
 * @param formData <FormData>
 * @param selectedType <string|null>
 * @description action para a criação do produto;
  */
export async function createProductAction(formData: FormData, selectedType: string | null) {

    const nomeDoProduto = formData.get("product-name");
    const descricaoDoProduto = formData.get("description");

    const { databases, account } = await CreateClient();
    const DATABASE_ID =  process.env.DATABASE_ID as string;
    const PRODUCT_COLLECTION = process.env.PRODUCT_COLLECTION  as string;
    const CHCEKOUT_COLLECTION = process.env.CHECKOUT_COLLECTION as string;
    const produtorId = await PegarUsuarioLogado();
    const ProdutoId = ID.unique();
    const CheckoutId = ID.unique();
    try {
        /* cria produto na coleção de produtos */
        await databases.createDocument(
            DATABASE_ID,
            PRODUCT_COLLECTION,
            ID.unique(),
            {
                Id: ProdutoId,
                Titulo: nomeDoProduto,
                Descricao: descricaoDoProduto,
                ProdutorId: produtorId?.$id,
                CheckoutId: CheckoutId,
                CreatedAt: new Date().toISOString(),
            }
        );

        /* cria checkout do produto  */
        await databases.createDocument(
            DATABASE_ID,
            CHCEKOUT_COLLECTION,
            ID.unique(),
            {
                Id: CheckoutId,
                ProdutoId: ProdutoId,
            }
        )

        console.log("Product created successfully");
        return { success: true };

    } catch (error: any) {
        console.error("Error creating product:", error);
        return { success: false, error: error.message };
    }

}