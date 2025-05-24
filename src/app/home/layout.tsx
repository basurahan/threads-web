import React from 'react'
import Image from 'next/image'
import MessageIcon from '@/assets/message.svg'
import NotificationIcon from '@/assets/bell.svg'
import HomeIcon from '@/assets/home.svg'
import StarIcon from '@/assets/star-off.svg'
import FolderIcon from '@/assets/folder.svg'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[300px_1fr] grid-rows-[56px_1fr] h-full">
            <div className="col-span-2 border-b border-surfaceVariant flex">
                <div className="flex items-center h-full">
                    <Image src="/brand.png" alt="threads-web" height={200} width={200} className="size-[34px] inline-block" />
                    <span className="md-sys-typescale-title-large ms-2">Threads</span>
                </div>
                <div className="grow-1 flex items-center justify-center px-12">
                    <input placeholder="Search" type="text" name="search" id="search" className="md-sys-typescale-body-medium h-[35px] rounded-full border-surfaceVariant bg-surfaceContainer focus:bg-surfaceContainerHighest w-full max-w-[500px] outline-primary px-4" />
                </div>
                <div className="flex items-center justify-center gap-2">
                    <a className="inline-block group rounded-full border border-surfaceVariant size-[35px] p-[4px] hover:bg-primary select-none">
						<MessageIcon className="size-full group-hover:text-onPrimary" />
					</a>

                    <a className="inline-block group rounded-full border border-surfaceVariant size-[35px] p-[4px] hover:bg-primary select-none">
						<NotificationIcon className="size-full group-hover:text-onPrimary" />
					</a>
					
					<a className="inline-block rounded-full border border-surfaceVariant size-[35px] p-[2px] hover:bg-primary select-none">
						<Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="size-full" />
					</a>
                </div>
            </div>
            <nav className="border-r border-surfaceVariant overflow-auto">
                <ul className="m-4">
                    <li>
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <HomeIcon className="inline-block size-[20px] group-hover:text-onPrimary" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">Home</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <StarIcon className="inline-block size-[20px] group-hover:text-onPrimary" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">Popular</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <FolderIcon className="inline-block size-[20px] group-hover:text-onPrimary" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">Explore</span>
                        </a>
                    </li>
                </ul>

                <div className="h-[1px] bg-surfaceVariant" />
                <p className="md-sys-typescale-body-medium text-tertiary ms-4 mt-4">Custom Feed</p>

                <ul className="m-4">
                    <li>
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/Android</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/PHAdvice</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/Laravel</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/Memes</span>
                        </a>
                    </li>
                </ul>

                <div className="h-[1px] bg-surfaceVariant" />
                <p className="md-sys-typescale-body-medium text-tertiary ms-4 mt-4">Communities</p>

                <ul className="m-4">
                    <li>
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/Android</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/PHAdvice</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/Laravel</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/Memes</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/PHAdvice</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/Laravel</span>
                        </a>
                    </li>

                    <li className="mt-2">
                        <a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
                            <Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
                            <span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">r/Memes</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="">{children}</div>
        </div>
    )
}