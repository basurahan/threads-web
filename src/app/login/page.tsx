import TextInput from '@/app/ui/forms/TextInput'
import Submit from '@/app/ui/forms/Submit'

function LoginForm() {
    return (
        <div className="w-full md:w-md mx-[16px]">
            <TextInput label="Email" name="email" />
            <TextInput label="Password" name="password" className="mt-[var(--spacing-4)]" />
            <Submit label="Login" className="mt-[var(--spacing-8)]" />
        </div>
    )
}

export default async function Page() {
    return (
        <div className="size-full flex items-center justify-center">
            <LoginForm />
        </div>
    )
}