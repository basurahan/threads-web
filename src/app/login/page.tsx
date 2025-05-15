import TextInput from '@/app/ui/forms/TextInput'
import Submit from '@/app/ui/forms/Submit'
import Link from 'next/link'

function LoginForm() {
    return (
        <div className="w-full md:w-md mx-4 my-6">
            <p className="md-sys-typescale-headline-large mb-6">Welcome back!</p>

            <TextInput type="text" label="Email" name="email" />
            <TextInput type="password"  label="Password" name="password" className="mt-4" />

            <div className="flex items-center mt-6">
                <input type="checkbox" name="remember" id="remember" className="size-[18px] accent-[var(--md-sys-color-primary)]" />
                <label htmlFor="remember" className="select-none ms-3 md-sys-typescale-label-large">Remember me</label>
                <span className="grow" />
                <Link href="/register" className="md-sys-typescale-label-large text-[var(--md-sys-color-primary)]">Register</Link>
            </div>
            <Submit label="Login" className="mt-6" />
        </div>
    )
}


export default async function Page() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <LoginForm />
        </div>
    )
}