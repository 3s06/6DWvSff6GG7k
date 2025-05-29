/** 
 * Código teste para salvamento das infomações no banco de dados
*/
import { PixTransaction } from "../../types/api/pix";
import { CreateClient } from "../../lib/server/appwrite";
import { ID } from "node-appwrite";

const DATABASE_ID = process.env.DATABASE_ID!;
const COLLECTION_ID = process.env.COLLECTION_TRANSACTION!;
const PIX_KEY = process.env.PIX_KEY!;

/* async function TesteSaveDb() {

    const { databases } = await CreateClient();
    const now = new Date();
    const ExperationDate = new Date(now.getTime() + 3600 * 1000);
    const amount = 10
    try {
        const TransactionSchema: PixTransaction = {
            Id: ID.unique(),
            UserId: 'asdasdasdsadadadasda',
            txid:'asdasdasdadas',
            Amount: amount,
            Status: 'PENDING',
            Payer: [
                
            ],
            CreatedAt: now.toISOString(),
            UpdatedAt: now.toISOString(),
            ExpiresAt: ExperationDate.toISOString(),
            Taxa: 2,
        }
        
        await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            TransactionSchema
        );
    } catch (erro) {
        console.log("Error ao salvar no db", erro)
        throw new Error("Erro ao salvar no db")
    }
}

TesteSaveDb(); */