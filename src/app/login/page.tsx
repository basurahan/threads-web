import TextInput from '@/app/ui/forms/TextInput'
import Submit from '@/app/ui/forms/Submit'

function LoginForm() {
    return (
        <div className="h-auto w-full md:w-md mx-[16px] my-[24px]">
            <TextInput type="text" label="Email" name="email" />
            <TextInput type="password"  label="Password" name="password" className="mt-[var(--spacing-4)]" />
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