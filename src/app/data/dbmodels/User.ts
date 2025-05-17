import { z } from 'zod'

export const UserSchema = z.object({
    id: z.string().optional(),
    email: z.string().email({ message: "invalid email" }),
    firstname: z.string().min(1, { message: "firstname is required" }),
    lastname: z.string().min(1, { message: "lastname is required" }),
    password: z.string().min(1, { message: "password is required" })
})

export type IUser = z.infer<typeof UserSchema>