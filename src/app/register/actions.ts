'use server'

import registerUseCase from '@/app/domain/usecases/registration/RegisterUseCase'
import { RegistrationFormFieldsSchema, IRegistrationFormState } from '@/app/register/types'
import { ZodIssueCode } from 'zod'
import { generateMessage } from '@/app/util/message'
import { isUniqueViolation } from '@/app/util/postgres'
import { redirect } from 'next/navigation'
import { generateToken } from '@/app/util/jwt'
import { cookies } from 'next/headers'

export async function registerUser(
    prevState: IRegistrationFormState,
    formData: FormData
): Promise<IRegistrationFormState> {

    const email = formData.get("email") as string
    const firstname = formData.get("firstname") as string
    const lastname = formData.get("lastname") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    let userId: string | undefined = undefined
    const state: IRegistrationFormState = {
        values: {
            email: email,
            firstname: firstname,
            lastname: lastname,
            password: password,
            confirmPassword: confirmPassword
        },
        errors: {}
    }

    // form validation
    const payload = { email, firstname, lastname, password, confirmPassword }
    const form = RegistrationFormFieldsSchema.safeParse(payload)
    const codesNeedToCatch = [ZodIssueCode.too_small, ZodIssueCode.custom]
    if (!form.success) {
        for (const item of form.error.issues) {
            if (item.code !in codesNeedToCatch) continue
            for (const path of item.path) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (state.errors as any)[path] = item.message
            }
        }
        return state
    }
    
    try {
        const user = await registerUseCase(
            email,
            firstname,
            lastname,
            password  
        )
        userId = user.id
        state.message = generateMessage("Registration successful", "info")
    } catch(e) {
        if (isUniqueViolation(e)) {
            state.errors.email = "email already in used"
        } else {
            state.message = generateMessage("Something went wrong", "error")
        }
    } finally {
        const hasNoFieldErrors = Object.values(state.errors).every(value => value === undefined)
        if (state.message !== undefined && !hasNoFieldErrors) {
            return state
        }

        if (userId === undefined) {
            throw Error("Something went wrong")
        }

        const token = await generateToken({ sub: userId })
        const cookiesStore = await cookies()
        cookiesStore.set({
            name: "token",
            value: token,
            httpOnly: true,
            path: "/"
        })

        redirect("/")
    }
}