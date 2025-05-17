import { z } from 'zod'

const RegistrationFromSchema = z.object({
    message: z.string().optional(),
    email: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string(),
    confirmPassword: z.string()
})

export type IRegistrationForm = z.infer<typeof RegistrationFromSchema>