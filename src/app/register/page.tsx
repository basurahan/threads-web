import TextInput from '@/app/ui/forms/TextInput'
import Submit from '@/app/ui/forms/Submit'
import Link from 'next/link'

function RegistrationForm() {
    return (
        <div className="w-full md:w-md mx-4 my-12">
            <div className="flex justify-center">
                <img src="/brand.png" alt="threads-web" />
            </div>

            <p className="text-center md-sys-typescale-headline-large mt-4 mb-12">Good to have you onboard!</p>

            <TextInput type="text" label="Email" name="email" />
            <div className="flex mt-4 gap-4">
                <TextInput type="text" label="Firstname" name="firstname" className="grow" />
                <TextInput type="text" label="Lastname" name="lastname" className="grow" />
            </div>
            <TextInput type="password"  label="Password" name="password" className="mt-4" />
            <TextInput type="password"  label="Confirm Password" name="confirm_password" className="mt-4" />
            <Submit label="Login" className="mt-6" />
        </div>
    )
}


export default async function Page() {
    return (
        <div className="min-h-screen flex justify-center bg-surface">
            <RegistrationForm />
        </div>
    )
}