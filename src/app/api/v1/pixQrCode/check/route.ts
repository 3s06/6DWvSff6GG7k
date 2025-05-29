import { Query } from "node-appwrite";
import { efiPay } from "@/lib/efi";
import { authenticate } from "@/actions/api/authenticate";
import { CreateClient } from "@/lib/server/appwrite";
import { NextResponse } from "next/server";
import { aj } from "@/lib/arcjet";

interface ArcjetProtectOptions {
  requested: number;
  userId?: string;
}

const DATABASE_ID = process.env.DATABASE_ID!;
const COLLECTION_ID = process.env.COLLECTION_TRANSACTION!;

export async function GET(request: Request) {
  const { databases } = await CreateClient();

  const AuthenticateRequest = await authenticate(request);
  if (AuthenticateRequest instanceof NextResponse) {
    return AuthenticateRequest;
  }

  const userId = AuthenticateRequest.UserId;
  const decision = await aj.protect(request, {
    userId,
    requested: 5,
  } as ArcjetProtectOptions);

  if (decision.isDenied()) {
    return NextResponse.json(
      {
        error: "You are suspicious!",
        reason: decision.reason,
      },
      { status: 403 }
    );
  }

  const { searchParams } = new URL(request.url);
  const txid = searchParams.get("txid");

  if (!txid) {
    return NextResponse.json({ error: "txid is required" }, { status: 400 });
  }

  try {
    const result = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal("txid", txid)]
    );

    if (result.total === 0) {
      return NextResponse.json({ error: "Transação não encontrada" }, { status: 404 });
    }

    const transaction = result.documents[0];
    const pixStatus = await efiPay.pixDetailCharge({ txid });

    const statusEfi = pixStatus.status;

    let newStatus: "PENDING" | "PAID" | "FAILED" | "EXPIRED" | "REFUNDED" = "PENDING";

    switch (statusEfi) {
      case "CONCLUIDA":
        newStatus = "PAID";
        break;
      case "REMOVIDA_PELO_USUARIO_RECEBEDOR":
        newStatus = "FAILED";
        break;
      case "ATIVA":
        newStatus = new Date() > new Date(transaction.ExpiresAt) ? "EXPIRED" : "PENDING";
        break;
      default:
        newStatus = "FAILED";
    }

    if (transaction.Status !== newStatus) {
      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, transaction.$id, {
        Status: newStatus,
        UpdatedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        status: newStatus,
        expiresAt: transaction.ExpiresAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao verificar status Pix:", error);
    return NextResponse.json({ error: "Erro ao verificar transação Pix" }, { status: 500 });
  }
}
