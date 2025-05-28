'use client'

import Image from 'next/image'
import MessageIcon from '@/assets/message.svg'
import NotificationIcon from '@/assets/bell.svg'
import Search from '@/app/home/search'
import MoreIcon from '@/assets/more.svg'
import UserIcon from '@/assets/user.svg'
import SettingsIcon from '@/assets/setting-o.svg'
import LogoutIcon from '@/assets/logout.svg'
import { autoUpdate, flip, offset, shift, useDismiss, useFloating, useInteractions } from '@floating-ui/react'
import { useCallback, useState } from 'react'

export default function AppBar({ onOpenDrawer }: { onOpenDrawer: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const { refs, floatingStyles, context } = useFloating({
        whileElementsMounted: autoUpdate,
        middleware: [offset(10), shift({ padding: 16 }), flip()],
        open: isOpen,
        onOpenChange: setIsOpen
    })
    const dismiss = useDismiss(context)
    const {getReferenceProps, getFloatingProps} = useInteractions([
        dismiss
    ])
    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setIsOpen(prev => !prev)
    }, [])
    return (
        <div className="col-span-2 border-b border-surfaceVariant flex bg-surfaceContainerLowest">
            <div className="flex items-center h-full ms-4">
                <Image src="/brand.png" alt="threads-web" height={200} width={200} className="size-[34px] inline-block" />
                <span className="md-sys-typescale-title-large ms-2 text-onSurface">Threads</span>
            </div>
            <div className="grow-1 flex items-center justify-center h-full">
                <Search />
            </div>
            <div className="flex items-center justify-center gap-2 me-4">
                <a className="hidden lg:inline-block group rounded-full size-[30px] p-[4px] hover:bg-primary select-none">
                    <MessageIcon className="size-full group-hover:text-onPrimary text-onSurface" />
                </a>

                <a className="hidden lg:inline-block group rounded-full size-[30px] p-[4px] hover:bg-primary select-none">
                    <NotificationIcon className="size-full group-hover:text-onPrimary text-onSurface" />
                </a>

                <div>
                    <a ref={refs.setReference} onClick={handleClick} {...getReferenceProps()} className="hidden lg:inline-block rounded-full size-[30px] p-[2px] hover:bg-primary select-none">
                        <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="size-full" />
                    </a>
                    {
                        isOpen && (
                            <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} className="min-w-[300px] rounded-xl bg-surfaceContainer overflow-hidden">
                                <ul>
                                    <li>
                                        <a className="inline-block w-full px-6 py-3 bg-surfaceContainer group hover:bg-primary">
                                            <UserIcon className="inline-block size-5 group-hover:text-onPrimary" />
                                            <span className="md-sys-typescale-label-large ms-4 text-onSurface group-hover:text-onPrimary">My Profile</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="inline-block w-full px-6 py-3 bg-surfaceContainer group hover:bg-primary">
                                            <SettingsIcon className="inline-block size-5 group-hover:text-onPrimary" />
                                            <span className="md-sys-typescale-label-large ms-4 text-onSurface group-hover:text-onPrimary">Settings</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="inline-block w-full px-6 py-3 bg-surfaceContainer group hover:bg-primary">
                                            <LogoutIcon className="inline-block size-5 group-hover:text-onPrimary" />
                                            <span className="md-sys-typescale-label-large ms-4 text-onSurface group-hover:text-onPrimary">Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>

                <a onClick={onOpenDrawer} className="inline-block lg:hidden group rounded-full size-[35px] p-[4px] hover:bg-primary select-none">
                    <MoreIcon className="size-full group-hover:text-onPrimary text-onSurface" />
                </a>
            </div>
        </div>
    )
}