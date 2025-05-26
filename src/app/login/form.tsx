'use client'

import TextInput from '@/app/ui/forms/TextInput'
import Submit from '@/app/ui/forms/Submit'
import Link from 'next/link'
import Image from 'next/image'
import { login } from '@/app/login/actions'
import { ILoginFormState } from '@/app/login/types'
import { toast, ToastContainer } from 'react-toastify'
import { useActionState, useEffect } from 'react'

const initialState: ILoginFormState = {
	values: {
		email: "",
		password: ""
	}
}

export default function LoginForm() {
	const [state, formAction] = useActionState(login, initialState)

	useEffect(() => {
		if (state.message) toast(state.message.text, { type: state.message.type, theme: "colored" })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.message?.id])

	return (
		<form action={formAction} className="w-full md:w-md mx-4 mt-12 mb-[200px]">
			<ToastContainer />

			<div className="flex justify-center">
				<Image
					src="/brand.png"
					alt="threads-web"
					height={200}
					width={200}
				/>
			</div>

			<p className="text-center md-sys-typescale-headline-large mt-4 mb-12">Welcome to Threads!</p>

			<TextInput
				type="text"
				label="Email"
				name="email"
				defaultValue={state.values.email}
			/>
			<TextInput
				type="password"
				label="Password"
				name="password"
				className="mt-4"
				defaultValue={state.values.password}
			/>

			<div className="flex items-center mt-4">
				<input
					type="checkbox"
					name="remember"
					id="remember"
					className="size-[18px] accent-primary"
				/>
				<label htmlFor="remember" className="select-none ms-3 md-sys-typescale-label-large">Remember me</label>
				<span className="grow" />
				<Link href="/register" className="md-sys-typescale-label-large text-primary">Register</Link>
			</div>
			<Submit label="Login" className="mt-6" />
		</form>
	)
}