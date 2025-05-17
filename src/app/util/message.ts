import { IMessage, IMessageType } from '@/app/types/message'

export function generateMessage(text: string, type: IMessageType): IMessage  {
    return {
        text: text,
        id: crypto.randomUUID(),
        type: type
    }
}