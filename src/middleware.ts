import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ["/login", "/register"]
const internalRoutes = ["/_next", "/favicon.ico", "/.well-known"]
 
export async function middleware(request: NextRequest) {
	const token = request.cookies.get("token")
  	const hasToken = token !== undefined

	for (const item of internalRoutes) {
		if (request.nextUrl.pathname.startsWith(item)) {
			return NextResponse.next()
		}
	}

	// user access public routes but already logged in
  	if (publicRoutes.includes(request.nextUrl.pathname) && hasToken) {
		return NextResponse.redirect(new URL(request.nextUrl.origin))
  	}

	// use access a private route but does not have logged in yet
	if (!publicRoutes.includes(request.nextUrl.pathname) && !hasToken) {
		return NextResponse.redirect(new URL('/login', request.nextUrl.origin))
	}

  	return NextResponse.next()
}