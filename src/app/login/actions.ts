'use server'

import { ILoginFormState, LoginFormFieldsSchema } from '@/app/login/types'
import { generateMessage } from '@/app/util/message'
import loginUseCase from '@/app/domain/usecases/auth/LoginUseCase'
import { generateToken } from '@/app/util/jwt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(
    prevState: ILoginFormState,
    formData: FormData
) {
    const errorMessage = generateMessage("email or password does not match", "error")

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const state: ILoginFormState = {
        values: {
            email: email,
            password: password
        }
    }

    const payload = { email, password }
    const form = LoginFormFieldsSchema.safeParse(payload)

    if (!form.success) {
        state.message = errorMessage
        return state
    }

    try {
        const user = await loginUseCase(email, password)

        const token = await generateToken({ sub: user.id! })
        const cookiesStore = await cookies()
        cookiesStore.set({
            name: "token",
            value: token,
            httpOnly: true,
            path: "/"
        })
    } catch {
        state.message = errorMessage
    } finally {
        if (state.message !== undefined) {
            return state
        }

        redirect("/")
    }
}