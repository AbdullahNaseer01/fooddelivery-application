import { NextResponse } from 'next/server';
import { useAuth } from '../firebase/Auth';


const auth = useAuth ();

export function middleware(request) {
    console.log("middleware hit")
  const user = request.nextauth.token?.user;
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  if (isDashboardRoute) {
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url)); // Redirect to login if not authenticated
    }

    const specifiedEmail = 'mianabdullah125125@gmail.com'; // Replace with your specified email
    if (user.email !== specifiedEmail) {
      return NextResponse.redirect(new URL('/', request.url)); // Redirect to home if not the specified email
    }
  }

  return NextResponse.next(); // Allow access to other routes
}

export const config = {
  matcher: ['/dashboard/(.*)'], // Apply middleware only to dashboard routes
};
