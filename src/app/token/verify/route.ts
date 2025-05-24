import { verifyToken } from '@/app/util/jwt'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.nextUrl)
    const item = await verifyToken(searchParams.get("token") as string)
    return Response.json({ test: item })
}