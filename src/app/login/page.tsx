import TextInput from '@/app/ui/forms/TextInput'
import Submit from '@/app/ui/forms/Submit'
import Link from 'next/link'

function LoginForm() {
    return (
        <div className="h-auto w-full md:w-md mx-[16px] my-[24px]">
            <TextInput type="text" label="Email" name="email" />
            <TextInput type="password"  label="Password" name="password" className="mt-[var(--spacing-4)]" />
            <div className="flex items-center mt-[var(--spacing-4)]">
                <input type="checkbox" name="remember" id="remember" className="size-[18px]" />
                <label htmlFor="remember" className="select-none ms-[12px] leading-[18px] text-md">Remember me</label>
                <span className="grow"></span>
                <Link href="/register" className="text-md leading-[18px] text-primary">Register</Link>
            </div>
            <Submit label="Login" className="mt-[var(--spacing-8)]" />
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