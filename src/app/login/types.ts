import { z } from 'zod'
import { MessageSchema } from '@/app/types/message'

export const LoginFormFieldsSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(1)
})

export const LoginFormStateSchema = z.object({
    message: MessageSchema,
    values: LoginFormFieldsSchema
})

export type ILoginFormState = z.infer<typeof LoginFormStateSchema>