import { z } from 'zod'

export const PostgresErrorSchema = z.object({
    code: z.string()
})

export type IPostgresError = z.infer<typeof PostgresErrorSchema>

export function isUniqueViolation(e: unknown): boolean {
    const pgError = PostgresErrorSchema.safeParse(e)
    return pgError.success && pgError.data.code === "23505"
}