import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for auth token
  const authToken = request.cookies.get('auth-token');
  const isAuthenticated = authToken?.value === 'dummy';

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/signup', '/forgot-password', '/pricing', '/blog'];
  const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith('/blog/'));

  // If accessing app routes without auth, redirect to login
  if (!isAuthenticated && pathname.startsWith('/app')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If already authenticated and trying to access login/signup, redirect to dashboard
  if (isAuthenticated && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/app/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
