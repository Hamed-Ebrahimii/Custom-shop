import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/admin') && !request.cookies.get('token')){
        return NextResponse.redirect(new URL('/login-admin', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/login-admin') && request.cookies.get('token')) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }
}
export const config = {
    matcher: ['/login-admin', '/admin/:path*'],
}