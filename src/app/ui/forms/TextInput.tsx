'use client'

import clsx from 'clsx'
import { useState, useCallback } from 'react'

import Toggle from '@/app/ui/forms/Toggle'

type TextInput = "text" | "password"

export default function TextInput({ type, name, label, defaultValue, className } : {  type: TextInput, name: string, label: string, defaultValue?: string, className?: string }) {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const handleToggleClick = useCallback((isCheck: boolean) => { setIsPasswordShown(isCheck) }, [])
    const handleFocus = useCallback(() => { setIsFocused(true) }, [])
    const handleBlur = useCallback(() => { setIsFocused(false) }, [])

    return (
        <div className={className}>
            <label htmlFor={name} className="block md-sys-typescale-label-large mb-3">{label}</label>
            <div 
                className={
                    clsx(
                        "flex flex-row items-center h-[45px] rounded-md px-2",
                        {
                            "outline-surfaceVariant outline-2": !isFocused,
                            "outline-primary outline-4": isFocused
                        }
                    )
                }
            >
                <input
                    type={(isPasswordShown || type === "text") ? "text" : "password"}
                    name={name} 
                    id={name} 
                    className="h-full outline-none grow md-sys-typescale-body-large" onFocus={handleFocus} onBlur={handleBlur}
                    defaultValue={defaultValue}
                />
                { type === "password" && <Toggle size={34} marginStart={12} onClick={handleToggleClick} /> }
            </div>
        </div>
    )
}