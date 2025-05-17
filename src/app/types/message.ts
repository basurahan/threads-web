import { z } from 'zod'

const MessageTypeSchema = z.union([ z.literal("info"), z.literal("success"), z.literal("warning"), z.literal("error") ])
export const MessageSchema = z.object({ id: z.string().uuid(), text: z.string(), type: MessageTypeSchema }).optional()
export type IMessage = z.infer<typeof MessageSchema>
export type IMessageType = z.infer<typeof MessageTypeSchema>