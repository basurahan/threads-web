import { z } from 'zod'
import { MessageSchema } from '@/app/types/message'

export const RegistrationFormFieldsSchema = z.object({
    email: z.string().email({ message: "invalid email" }),
    firstname: z.string().min(1, { message: "firstname is required" }),
    lastname: z.string().min(1, { message: "lastname is required" }),
    password: z.string().min(1, { message: "password is required" }),
    confirmPassword: z.string().min(1, { message: "confirm password is required" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["password", "confirmPassword"]
})

export const RegistrationFormStateSchema = z.object({
    message: MessageSchema,
    values: RegistrationFormFieldsSchema,
    errors: z.object({
        email: z.string().optional(),
        firstname: z.string().optional(),
        lastname: z.string().optional(),
        password: z.string().optional(),
        confirmPassword: z.string().optional()
    })
})

export type IRegistrationFormState = z.infer<typeof RegistrationFormStateSchema>