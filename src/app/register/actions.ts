'use server'

import registerUseCase from '@/app/domain/usecases/registration/RegisterUseCase'
import { RegistrationFormFieldsSchema, IRegistrationFormState } from '@/app/register/types'
import { ZodIssueCode } from 'zod'
import { generateMessage } from '@/app/util/message'

export async function registerUser(
    prevState: IRegistrationFormState,
    formData: FormData
): Promise<IRegistrationFormState> {

    const email = formData.get("email") as string
    const firstname = formData.get("firstname") as string
    const lastname = formData.get("lastname") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    let state: IRegistrationFormState = {
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
        for (let item of form.error.issues) {
            if (item.code !in codesNeedToCatch) continue
            for (let path of item.path) {
                (state.errors as any)[path] = item.message
            }
        }
        return state
    }
    
    try {
        await registerUseCase(
            email,
            firstname,
            lastname,
            password  
        )
        state.message = generateMessage("registration successful")
    } catch(e) {
        state.message = generateMessage("something went wrong")
    } finally {
        return state
    }
}