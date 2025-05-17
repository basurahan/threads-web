'use client'

import TextInput from '@/app/ui/forms/TextInput'
import Submit from '@/app/ui/forms/Submit'

import { useActionState, useEffect } from 'react'
import { IRegistrationForm } from '@/app/register/types'
import { registerUser } from '@/app/register/actions'
import { toast, ToastContainer } from 'react-toastify'

const initialState: IRegistrationForm = {
    message: undefined,
    email: "",
    firstname: "nice",
    lastname: "",
    password: "",
    confirmPassword: ""
}

export default function RegistrationForm() {
    const [state, formAction, pending] = useActionState<IRegistrationForm, FormData>(registerUser, initialState)

    useEffect(() => {
        if (state.message) {
            console.log("toast should be showing now")
            toast(state.message)
        }
    }, [state.message])

    return (
        <form action={formAction} className="w-full md:w-md mx-4 my-12">
            <ToastContainer />
            <div className="flex justify-center">
                <img src="/brand.png" alt="threads-web" />
            </div>

            <p className="text-center md-sys-typescale-headline-large mt-4 mb-12">
                {
                    state.message ? state.message : "Good to have you onboard!"
                }
            </p>

            <TextInput type="text" label="Email" name="email" defaultValue={state.email} />
            <div className="flex mt-4 gap-4">
                <TextInput type="text" label="Firstname" name="firstname" defaultValue={state.firstname} className="grow" />
                <TextInput type="text" label="Lastname" name="lastname" defaultValue={state.lastname} className="grow" />
            </div>
            <TextInput type="password"  label="Password" name="password" defaultValue={state.password} className="mt-4" />
            <TextInput type="password"  label="Confirm Password" name="confirmPassword" defaultValue={state.confirmPassword} className="mt-4" />
            <Submit label="Register" className="mt-6" />
        </form>
    )
}