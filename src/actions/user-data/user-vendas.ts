"use server"

import { Query } from "node-appwrite";
import { CreateClient } from "@/lib/server/appwrite";

const DATABASE_ID = process.env.DATABASE_ID!;
const COLLECTION_ID = process.env.COLLECTION_TRANSACTION!;

export async function getUserTransactions(UserId: string) {
    const { databases } = await CreateClient();
    
    try {

        const result = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [Query.equal("UserId", UserId)]
        );

        const transactions = result.documents.map((doc) => ({
            id: doc.txid,
            amount: doc.Amount,
            status: doc.Status,
            createdAt: doc.CreatedAt,
            expiresAt: doc.ExpiresAt,
        }));

        return {
            success: true,
            data: transactions,
        };
        
    } catch (error) {
        console.error("Erro ao buscar transações do usuário:", error);
        return {
            success: false,
            error: "Erro ao buscar transações",
        };
    }
}