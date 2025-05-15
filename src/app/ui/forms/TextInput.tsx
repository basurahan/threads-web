'use client'

import clsx from 'clsx'
import { useState, useCallback } from 'react'

import Toggle from '@/app/ui/forms/Toggle'

type TextInput = "text" | "password"

export default function TextInput({ type, name, label, className } : {  type: TextInput, name: string, label: string, className?: string }) {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const handleToggleClick = useCallback((isCheck: boolean) => { setIsPasswordShown(isCheck) }, [])
    const handleFocus = useCallback(() => { setIsFocused(true) }, [])
    const handleBlur = useCallback(() => { setIsFocused(false) }, [])

    return (
        <div className={className}>
            <label htmlFor={name} className="block text-md font-bold ms-1 mb-1">{label}</label>
            <div 
                className={
                    clsx(
                        "flex flex-row items-center h-[40px] border-[2px] rounded-[var(--radius-md)] text-md px-[var(--spacing-4)]",
                        {
                            "border-[var(--color-mute)]": !isFocused,
                            "border-[var(--color-primary)]": isFocused
                        }
                    )
                }
            >
                <input
                    type={(isPasswordShown || type === "text") ? "text" : "password"}
                    name={name} 
                    id={name} 
                    className="h-full outline-none grow" onFocus={handleFocus} onBlur={handleBlur} 
                />
                { type === "password" && <Toggle size={34} marginStart={12} onClick={handleToggleClick} /> }
            </div>
        </div>
    )
}