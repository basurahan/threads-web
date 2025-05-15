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
            className={`inline-block select-none hover:bg-mute rounded-full p-[var(--spacing-1)]`}
            onClick={handleClick}
        >
            {
               isCheck ? (<EyeIcon className="size-full" />) : (<EyeSlashIcon className="size-full" />)
            }
        </div>
    )
}