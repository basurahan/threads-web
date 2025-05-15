'use client'

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

import { useState, useCallback } from 'react'

export default function Toggle({ size, marginStart, onClick } : { size: number, marginStart: number, onClick: (isCheck: boolean) => void }) {
    const [isCheck, setIsCheck] = useState(false)

    const handleClick = useCallback(() => {
        const newState = !isCheck
        setIsCheck(newState)
        onClick(newState)
    }, [isCheck, onClick])

    return (
        <div
            style={{
                height: size,
                width: size,
                marginInlineStart: marginStart
            }}
            className={`inline-block select-none hover:bg-[var(--md-sys-color-surface-container)] rounded-full p-1`}
            onClick={handleClick}
        >
            {
               isCheck ? (<EyeIcon className="size-full text-[var(--md-sys-color-secondary)]" />) : (<EyeSlashIcon className="size-full text-[var(--md-sys-color-secondary)]" />)
            }
        </div>
    )
}