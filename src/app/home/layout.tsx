'use client'

import React, { useCallback, useState } from 'react'
import Sidebar from '@/app/home/sidebar'
import AppBar from '@/app/home/appbar'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isDrawerShown, setIsDrawerShown] = useState(false)
    const handleDrawerOpening = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setIsDrawerShown(!isDrawerShown)
    }, [isDrawerShown])

    return (
        <div className="grid grid-cols-[300px_1fr] grid-rows-[56px_1fr] h-full">
            <AppBar onOpenDrawer={handleDrawerOpening} />
            <Sidebar isShown={isDrawerShown} />
            <div>{children}</div>
        </div>
    )
}