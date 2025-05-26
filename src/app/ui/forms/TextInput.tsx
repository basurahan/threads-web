'use client'

import clsx from 'clsx'
import { useState, useCallback } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
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
    }: ITextInput
) {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const handleToggleClick = useCallback((isCheck: boolean) => { setIsPasswordShown(isCheck) }, [])
    const handleFocus = useCallback(() => { setIsFocused(true) }, [])
    const handleBlur = useCallback(() => { setIsFocused(false) }, [])

    const labelStyle = clsx(
        "block md-sys-typescale-label-large mb-3",
        {
            "text-onBackground": !error,
            "text-error": error
        }
    )

    const inputContainerStyle = clsx(
        "flex flex-row items-center h-[45px] rounded-md px-2",
        {
            "outline-surfaceVariant outline-2": !isFocused && !error,
            "outline-error outline-4": !isFocused && error,
            "outline-primary outline-4": isFocused
        }
    )

    const inputType: TextInput = (isPasswordShown || type === "text") ? "text" : "password"

    return (
        <div className={className}>
            <label htmlFor={name} className={labelStyle}>
                {label}
            </label>
            <div className={inputContainerStyle}>
                <input
                    type={inputType}
                    name={name}
                    id={name}
                    defaultValue={defaultValue}
                    required={isRequired}
                    className="h-full outline-none grow md-sys-typescale-body-large" 
                    onFocus={handleFocus} 
                    onBlur={handleBlur}
                />
                {
                    type === "password" && 
                    <Toggle 
                        className="size-[34px] ms-3" 
                        onClick={handleToggleClick} 
                        initial={<EyeSlashIcon className="size-full text-secondary" />} 
                        checked={<EyeIcon className="size-full text-secondary" />} 
                    />
                }
            </div>
            <p className="md-sys-typescale-label-small min-h-[var(--md-sys-typescale-label-small-line-height)] mt-2 ms-1 text-error">{error}</p>
        </div>
    )
}