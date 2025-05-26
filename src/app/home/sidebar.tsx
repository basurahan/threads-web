'use client'

import HomeIcon from '@/assets/home.svg'
import StarIcon from '@/assets/star-off.svg'
import FolderIcon from '@/assets/folder.svg'
import PlusIcon from '@/assets/plus.svg'
import Image from 'next/image'
import clsx from 'clsx'

export default function Sidebar({ isShown }: { isShown: boolean }) {
	return (
		<nav className={clsx(
			"fixed top-[56px] w-full h-full lg:block lg:static lg:border-r lg:border-surfaceVariant overflow-auto bg-surfaceContainerLowest",
			{
				"block": isShown,
				"hidden": !isShown
			}
		)}>
			<p className="block lg:hidden md-sys-typescale-body-medium text-tertiary ms-4 mt-4">Quick Access</p>

			<ul className="block lg:hidden m-4">
				<li>
					<a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
						<Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
						<span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">My Profile</span>
					</a>
				</li>

				<li className="mt-2">
					<a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
						<Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
						<span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">Messages</span>
					</a>
				</li>

				<li className="mt-2">
					<a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
						<Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
						<span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">Notifications</span>
					</a>
				</li>

				<li className="mt-2">
					<a className="group flex items-center px-4 py-3 rounded-lg hover:bg-primary">
						<Image src="https://avatar.iran.liara.run/public/boy" alt="Avatar" height={500} width={500} className="inline-block size-[20px]" />
						<span className="md-sys-typescale-label-large ms-2 group-hover:text-onPrimary">Settings</span>
					</a>
				</li>
			</ul>

			<div className="block lg:hidden h-[1px] bg-surfaceVariant" />
			<p className="md-sys-typescale-body-medium text-tertiary ms-4 mt-4">Dashboard</p>

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
						<PlusIcon className="inline-block size-[20px] text-tertiary group-hover:text-onPrimary" />
						<span className="md-sys-typescale-label-large ms-2 text-tertiary group-hover:text-onPrimary">Create a custom feed</span>
					</a>
				</li>

				<li className="mt-2">
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
						<PlusIcon className="inline-block size-[20px] text-tertiary group-hover:text-onPrimary" />
						<span className="md-sys-typescale-label-large ms-2 text-tertiary group-hover:text-onPrimary">Create a community</span>
					</a>
				</li>

				<li className="mt-2">
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
	)
}