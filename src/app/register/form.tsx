'use client'

import TextInput from '@/app/ui/forms/TextInput'
import Submit from '@/app/ui/forms/Submit'

import { useActionState, useEffect } from 'react'
import { IRegistrationFormState } from '@/app/register/types'
import { registerUser } from '@/app/register/actions'
import { toast, ToastContainer } from 'react-toastify'

const initialState: IRegistrationFormState = {
    message: undefined,
    values: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        confirmPassword: ""
    },
    errors: {}
}

export default function RegistrationForm() {
    const [state, formAction, pending] = useActionState<IRegistrationFormState, FormData>(registerUser, initialState)

    useEffect(() => {
        if (state.message) toast(state.message.text, { type: state.message.type, theme: "colored" })
    }, [state.message?.id])

    return (
        <form action={formAction} className="w-full md:w-md mx-4 my-12">
            <ToastContainer />
            
            <div className="flex justify-center">
                <img src="/brand.png" alt="threads-web" />
            </div>

            <p className="text-center md-sys-typescale-headline-large mt-4 mb-12">Good to have you onboard!</p>

            <TextInput type="text" name="email" label="Email*" isRequired={false} defaultValue={state.values.email} error={state.errors.email} />
            <div className="flex mt-4 gap-4">
                <TextInput type="text" name="firstname" label="Firstname*" isRequired={false} defaultValue={state.values.firstname} error={state.errors.firstname} className="grow" />
                <TextInput type="text" name="lastname" label="Lastname*" isRequired={false} defaultValue={state.values.lastname} error={state.errors.lastname} className="grow" />
            </div>
            <TextInput type="password" name="password"  label="Password*" isRequired={false} defaultValue={state.values.password} error={state.errors.password} className="mt-4" />
            <TextInput type="password" name="confirmPassword"  label="Confirm Password*" isRequired={false} defaultValue={state.values.confirmPassword} error={state.errors.confirmPassword} className="mt-4" />
            <Submit label="Register" className="mt-6" />
        </form>
    )
}