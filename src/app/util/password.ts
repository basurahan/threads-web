import crypto from 'crypto'

export function hash(text: string): string {
    const salt = process.env.PASSWORD_SALT
    if (salt === undefined) throw Error("salt is undefined")
    return crypto.createHash("sha256").update(text+salt).digest('hex')
}