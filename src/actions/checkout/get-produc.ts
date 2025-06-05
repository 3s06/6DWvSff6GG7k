"use server";
import { CreateClient } from "@/lib/server/appwrite";
import { getProductByIdAction } from "../produtos/get-product-by-id";

export async function getCheckoutByIdAction(checkoutId: string, produtoId: string) {

    const { databases, account } = await CreateClient();
    const DATABASE_ID =  process.env.DATABASE_ID as string;
    const PRODUCT_COLLECTION = process.env.PRODUCT_COLLECTION  as string;
    const CHCEKOUT_COLLECTION = process.env.CHECKOUT_COLLECTION as string;

    const produto = await getProductByIdAction(produtoId);
    const response = await databases.getDocument(
        DATABASE_ID,
        CHCEKOUT_COLLECTION,
        checkoutId
    );

    try {
        
    } catch (error) {
        
    }

}