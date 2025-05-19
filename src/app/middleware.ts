import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rotas protegidas: apenas usuários autenticados
const protectedRoutes = ['/dashboard']

// Rotas públicas: apenas usuários não autenticados
const publicRoutes = ['/signin', '/signup']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessCookie = request.cookies.get('Sess')

  const isAuthenticated = !!sessCookie?.value

  // Se estiver autenticado e tentar acessar /signin ou /signup → redireciona para /dashboard
  if (isAuthenticated && publicRoutes.includes(pathname)) {
    const redirectUrl = new URL('/dashboard', request.url)
    return NextResponse.redirect(redirectUrl)
  }

  // Se NÃO estiver autenticado e tentar acessar /dashboard → redireciona para /signin
  if (!isAuthenticated && protectedRoutes.includes(pathname)) {
    const redirectUrl = new URL('/signin', request.url)
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

// Especifica as rotas que o middleware deve monitorar
export const config = {
  matcher: [
    '/dashboard',
    '/signin',
    '/signup'
  ],
}
