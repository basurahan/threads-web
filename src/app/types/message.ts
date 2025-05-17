import { z } from 'zod'

export const MessageSchema = z.object({ text: z.string(),id: z.string().uuid()}).optional()
export type IMessage = z.infer<typeof MessageSchema>