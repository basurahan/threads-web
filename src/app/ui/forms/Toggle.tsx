'use client'

import clsx from 'clsx'
import { useState, useCallback } from 'react'

interface IToggle {
    className?: string
    onClick: (isCheck: boolean) => void,
    initial: React.ReactNode,
    checked: React.ReactNode
}

/**
 * A component to toggle components.
 * 
 * @param {string} className - The styles of this component's container. You must set the height, width.
 */
export default function Toggle({ className, onClick, initial, checked }: IToggle) {
    const [isCheck, setIsCheck] = useState(false)

    const handleClick = useCallback(() => {
        const newState = !isCheck
        setIsCheck(newState)
        onClick(newState)
    }, [isCheck, onClick])

    const styles = clsx(
        "inline-block select-none hover:bg-surfaceContainer rounded-full p-1",
        className
    )

    return (
        <div className={styles} onClick={handleClick}>
            { isCheck ? checked : initial }
        </div>
    )
}