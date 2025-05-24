import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from '@/app/util/jwt'
import { runSafe } from '@/app/util/promise'

const publicRoutes = ["/login", "/register"]
const internalRoutes = ["/_next", "/favicon.ico", "/.well-known"]
 
export async function middleware(request: NextRequest) {
	// allow framework routes
	for (const item of internalRoutes) {
		if (request.nextUrl.pathname.startsWith(item)) {
			return NextResponse.next()
		}
	}

	const token = request.cookies.get("token")?.value
  	const hasToken = token !== undefined

	// user access public routes
  	if (publicRoutes.includes(request.nextUrl.pathname)) {

		// user has token we should check if it is still valid
		if (hasToken) {
			const tokenPayload = await runSafe(verifyToken(token))

			// if the token is valid then we redirect them to home page
			if (tokenPayload.success) return NextResponse.redirect(new URL(request.nextUrl.origin))

			// if the token is invalid then we allow them
			if (!tokenPayload.success) return NextResponse.next()
		}

		// use has no token then we just proceed
		if (!hasToken) return NextResponse.next()
  	}

	// user access a private route
	if (!publicRoutes.includes(request.nextUrl.pathname)) {

		// user has token we should check if it is still valid
		if (hasToken) {
			const tokenPayload = await runSafe(verifyToken(token))

			// if the token is valid then we allow them in private routes
			if (tokenPayload.success) return NextResponse.next()

			// if the token is invalid then we redirect them to the login page
			if (!tokenPayload.success) return NextResponse.redirect(new URL('/login', request.nextUrl.origin))
		}

		// use has no token we should direct them to login page
		if (!hasToken) return NextResponse.redirect(new URL('/login', request.nextUrl.origin))
	}

  	return NextResponse.next()
}