import { CreateClient } from '@/lib/server/appwrite';
import { compare } from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function authenticate(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return NextResponse.json({ error: 'Autenticação requerida' }, { status: 401 });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [clientId, clientSecret] = credentials.split(':');

  try {

    const { databases } = await CreateClient();

    const document = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.COLLECTION_API_KEYS!,
      [`ClientId=${clientId}`]
    );

    if (document.total === 0) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    const storedSecret = document.documents[0].ClientSecret;
    const isValid = await compare(clientSecret, storedSecret);

    if (!isValid) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    return { userId: document.documents[0].Id };
  } catch (error) {
    return NextResponse.json({ error: 'Erro de autenticação' }, { status: 500 });
  }
}