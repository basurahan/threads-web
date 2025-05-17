'use client'

import clsx from 'clsx'
import { useState, useCallback } from 'react'

import Toggle from '@/app/ui/forms/Toggle'

type TextInput = "text" | "password"

interface ITextInput {
    type: TextInput, 
    name: string, 
    label: string, 
    isRequired?: boolean,
    defaultValue?: string,
    error?: string,
    className?: string
}

export default function TextInput(
    { 
        type, 
        name, 
        label,
        isRequired,
        defaultValue, 
        error,
        className 
    } : ITextInput
) {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const handleToggleClick = useCallback((isCheck: boolean) => { setIsPasswordShown(isCheck) }, [])
    const handleFocus = useCallback(() => { setIsFocused(true) }, [])
    const handleBlur = useCallback(() => { setIsFocused(false) }, [])

    return (
        <div className={className}>
            <label 
                htmlFor={name} 
                className={clsx(
                    "block md-sys-typescale-label-large mb-3",
                    {
                        "text-onBackground": !error,
                        "text-error": error
                    }
                )}
            >
                {label}
            </label>
            <div 
                className={
                    clsx(
                        "flex flex-row items-center h-[45px] rounded-md px-2",
                        {
                            "outline-surfaceVariant outline-2": !isFocused && !error,
                            "outline-error outline-4": !isFocused && error,
                            "outline-primary outline-4": isFocused
                        }
                    )
                }
            >
                <input
                    type={(isPasswordShown || type === "text") ? "text" : "password"}
                    name={name} 
                    id={name} 
                    defaultValue={defaultValue}
                    required={isRequired}
                    className="h-full outline-none grow md-sys-typescale-body-large" onFocus={handleFocus} onBlur={handleBlur}
                />
                { type === "password" && <Toggle size={34} marginStart={12} onClick={handleToggleClick} /> }
            </div>
            <p className="md-sys-typescale-label-small min-h-[var(--md-sys-typescale-label-small-line-height)] mt-2 ms-1 text-error">{error}</p>
        </div>
    )
}