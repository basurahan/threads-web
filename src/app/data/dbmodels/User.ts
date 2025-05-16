import { z } from 'zod'

export const User = z.object({
    id: z.number().optional(),
    email: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string()
})

export type IUser = z.infer<typeof User>