import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rotas protegidas: apenas usuários autenticados
const protectedRoutes = ['/dashboard'];

// Rotas públicas: apenas usuários não autenticados
const publicRoutes = ['/signin', '/signup'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Obter o cookie de sessão
  const sessCookie = request.cookies.get('Sess');

  // Verificar se o usuário está autenticado
  const isAuthenticated = !!sessCookie?.value;

  // Depuração: logar informações úteis
  console.log({
    pathname,
    isAuthenticated,
    sessCookie: sessCookie?.value || 'No cookie found',
  });

  // Se o usuário estiver autenticado e tentar acessar uma rota pública, redirecionar para /dashboard
  if (isAuthenticated && publicRoutes.includes(pathname)) {
    const redirectUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Se o usuário NÃO estiver autenticado e tentar acessar uma rota protegida, redirecionar para /signin
  if (!isAuthenticated && protectedRoutes.some((route) => pathname.startsWith(route))) {
    const redirectUrl = new URL('/signin', request.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Continuar com a requisição se nenhuma condição de redirecionamento for atendida
  return NextResponse.next();
}

// Configuração do matcher para especificar as rotas monitoradas
export const config = {
  matcher: [
    '/dashboard/:path*', // Inclui sub-rotas de /dashboard (ex.: /dashboard/profile)
    '/signin',
    '/signup',
  ],
};