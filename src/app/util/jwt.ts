import { SignJWT, jwtVerify } from 'jose'
import { ISession } from '@/app/types/session'

const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2')

export async function generateToken(payload: ISession): Promise<string> {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setExpirationTime("10m")
        .sign(secret)
}

export async function verifyToken(token: string): Promise<ISession> {
    const content = await jwtVerify<ISession>(token, secret, { algorithms: ["HS256"], requiredClaims: ["sub"] })
    return content.payload
}