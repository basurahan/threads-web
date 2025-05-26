'use client'

export default function Error({ error }: { error: Error & { digest?: string } }) {
    throw error
}