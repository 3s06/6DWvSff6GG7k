import { CreateClient } from '@/lib/server/appwrite';
import { compare } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { Query } from 'node-appwrite';

type AuthenticateResponse = NextResponse<{ error: string }> | { UserId: string };

export async function authenticate(request: Request): Promise<AuthenticateResponse> {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return NextResponse.json({ error: 'Autenticação requerida' }, { status: 401 });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const [clientId, clientSecret] = Buffer.from(base64Credentials, 'base64').toString('ascii').split(':');

  try {
    const { databases } = await CreateClient();
    console.log("ClientId", clientId)

    const result = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.COLLECTION_API_KEYS!,
      [Query.equal("ClientId", clientId)]
    );

    if (result.total === 0) {
      console.log("Não encontrado")
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    } 
    
    const storedSecret = result.documents[0].ClientSecret;
    console.log("storedSecret", storedSecret)
    const isValid = await compare(clientSecret, storedSecret);
    console.log("Valido", isValid)
    console.log("UserId", result.documents[0].Id)
 
    return { UserId: result.documents[0].Id };
  } catch (error) {
    console.log("Error", error)
    return NextResponse.json({ error: 'Erro de autenticação' }, { status: 500 });
  }
}