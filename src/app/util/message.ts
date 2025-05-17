import { IMessage } from '@/app/types/message'

export function generateMessage(text: string): IMessage  {
    return {
        text: text,
        id: crypto.randomUUID()
    }
}