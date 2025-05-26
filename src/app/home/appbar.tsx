'use client'

import Image from 'next/image'
import MessageIcon from '@/assets/message.svg'
import NotificationIcon from '@/assets/bell.svg'
import Search from '@/app/home/search'
import MoreIcon from '@/assets/more.svg'

export default function AppBar({ onOpenDrawer }: { onOpenDrawer: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
    return (
        <div className="col-span-2 border-b border-surfaceVariant flex bg-surfaceContainerLowest">
            <div className="flex items-center h-full ms-4">
                <Image src="/brand.png" alt="threads-web" height={200} width={200} className="size-[34px] inline-block" />
                <span className="md-sys-typescale-title-large ms-2">Threads</span>
            </div>
            <div className="grow-1 flex items-center justify-center h-full">
                <Search />
            </div>
            <div className="flex items-center justify-center gap-2 me-4">
                <a className="hidden lg:inline-block group rounded-full size-[30px] p-[4px] hover:bg-primary select-none">
                    <MessageIcon className="size-full group-hover:text-onPrimary" />
                </a>

                <a className="hidden lg:inline-block group rounded-full size-[30px] p-[4px] hover:bg-primary select-none">
                    <NotificationIcon className="size-full group-hover:text-onPrimary" />
                </a>

                <a className="hidden lg:inline-block rounded-full size-[30px] p-[2px] hover:bg-primary select-none">
                    <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="size-full" />
                </a>

                <a onClick={onOpenDrawer} className="inline-block lg:hidden group rounded-full size-[35px] p-[4px] hover:bg-primary select-none">
                    <MoreIcon className="size-full group-hover:text-onPrimary" />
                </a>
            </div>
        </div>
    )
}