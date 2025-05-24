import { generateToken } from '@/app/util/jwt'

export async function GET() {
    //const { searchParams } = new URL(request.nextUrl)
    const token = await generateToken({ sub: "123" })
    return Response.json({ hello: token })
}