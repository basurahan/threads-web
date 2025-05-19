import { z } from 'zod'

export const SessionSchema = z.object({
    sub: z.string().min(1)
})

export type ISession = z.infer<typeof SessionSchema>
