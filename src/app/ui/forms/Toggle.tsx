'use client'

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'

export default function Toggle({ size, marginStart, onClick } : { size: number, marginStart: number, onClick: (isCheck: boolean) => void }) {
    const [isCheck, setIsCheck] = useState(false)
    return (
        <div 
            className={`inline-block select-none hover:bg-mute rounded-full p-[var(--spacing-1)] bg-amber-200`}
            onClick={() => {
                const newState = !isCheck
                setIsCheck(newState)
                onClick(newState)
            }}
        >
            {
               isCheck ? (<EyeIcon className={`size-[${size}px]`} />) : (<EyeSlashIcon className={`size-[${size}px]`} />)
            }
        </div>
    )
}