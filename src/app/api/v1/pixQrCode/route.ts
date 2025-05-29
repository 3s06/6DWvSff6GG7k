import { authenticate } from "@/actions/api/authenticate";
import { PixRequestSchema } from "@/schemas/pix-api";
import { NextRequest, NextResponse } from "next/server";
import type { PixTransaction } from "@/types/api/pix";
import { aj } from "@/lib/arcjet";
import { efiPay } from "@/lib/efi";
import { CreateClient } from "@/lib/server/appwrite";
import { ID } from "node-appwrite";

const DATABASE_ID = process.env.DATABASE_ID!;
const COLLECTION_ID = process.env.COLLECTION_TRANSACTION!;
const PIX_KEY = process.env.PIX_KEY!;

interface ArcjetProtectOptions {
    requested: number;
    userId?: string; // Adiciona userId como opcional
  }

export async function POST(request: NextRequest) {
    
    const { databases } = await CreateClient();

    const AuthenticateRequest = await authenticate(request);
    if (AuthenticateRequest instanceof NextResponse) {
        return AuthenticateRequest;
      }
    
   
    const userId = AuthenticateRequest.UserId;
    const decision = await aj.protect(request, { userId, requested: 5 } as ArcjetProtectOptions);

    if (decision.isDenied()) {
        return NextResponse.json({
            error: "You are suspicious!",
            reason: decision.reason,
        }, { status: 403 });
    }

    try {

        const body = await request.json();
        const ValitedBodyRequest = PixRequestSchema.safeParse(body);

        if (ValitedBodyRequest.error) {
            return NextResponse.json({
                error: 'Dados inválidos',
                details: ValitedBodyRequest.error.flatten()
            }, { status: 400 });
        };

        const { amount, customer } = ValitedBodyRequest.data;
        const now = new Date();
        const ExperationDate = new Date(now.getTime() + 3600 * 1000);


        let PixChargeBody = {
            calendario: {
                expiracao:  3600,
            },
            devedor: {
                cpf: customer.document,
                nome: customer.name
            },
            valor: {
                original:  (amount / 100).toFixed(2),
            },
            chave: PIX_KEY,
        };

        const PixResponse = await efiPay.pixCreateImmediateCharge({}, PixChargeBody);
        if (!PixResponse.txid) {
            return NextResponse.json({ error: 'Erro ao criar transação Pix' }, { status: 500 });
        }

        console.log("UserId", AuthenticateRequest.UserId)

        const TransactionSchema: PixTransaction = {
            Id: ID.unique(),
            UserId: AuthenticateRequest.UserId,
            txid: PixResponse.txid,
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

        return NextResponse.json({
            data: {
                id: PixResponse.txid,
                amount,
                status: PixResponse.status,
                pixCopiaECola: PixResponse.pixCopiaECola,
                platformFee: TransactionSchema.Taxa,
                createdAt: TransactionSchema.CreatedAt,
                updatedAt: TransactionSchema.UpdatedAt,
                expiresAt: TransactionSchema.ExpiresAt,
            }
        }, { status: 200 })
    } catch (error: any) {
        console.error('Erro ao criar transação Pix:', error);
        return NextResponse.json({ error: 'Erro interno ao criar transação' }, { status: 500 });
    }
}