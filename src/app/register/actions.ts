'use server'

import registerUseCase from '@/app/domain/usecases/registration/RegisterUseCase'
import { IRegistrationForm } from '@/app/register/types'

export async function registerUser(
    prevState: IRegistrationForm,
    formData: FormData
): Promise<IRegistrationForm> {
    await registerUseCase(
        "dev.renzsalanga@gmail.com",
        "renz carlo",
        "salanga",
        "S@langa1998"  
    )

    return {
        message: "nice pre hahaha",
        email: "thekingrenz23@gmail.com",
        firstname: "pogi",
        lastname: "salanga",
        password: "nice",
        confirmPassword: "pera"
    }
}