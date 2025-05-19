import { generateToken, verifyToken } from '@/app/util/jwt'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.nextUrl)
    const token = await generateToken({ sub: "123" })
    return Response.json({ hello: token })
}