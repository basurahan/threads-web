'use client'

import SearchIcon from '@/assets/search.svg'
import clsx from 'clsx'
import { useCallback, useState } from 'react'

export default function Search() {
    const [isFocused, setIsFocused] = useState(false)
    const handleFocus = useCallback(() => { setIsFocused(true) }, [])
    const handleBlur = useCallback(() => { setIsFocused(false) }, [])

    return (
        <div
            className={clsx(
                "hidden lg:flex border rounded-full border-surfaceVariant w-full max-w-[500px] items-center px-4",
                {
                    "outline-primary outline-2": isFocused,
                    "bg-surfaceContainer": !isFocused,
                    "bg-surfaceContainerHighest": isFocused
                }
            )}
        >
            <SearchIcon className="inline-block size-[20px]" />
            <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Search"
                type="text"
                name="search"
                id="search"
                className="md-sys-typescale-body-large h-[34px] outline-none grow ms-4"
            />
        </div>
    )
}