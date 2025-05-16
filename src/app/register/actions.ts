'use server'

import registerUseCase from '@/app/domain/usecases/registration/RegisterUseCase'

export default async function saveSomeData() {
    await registerUseCase(
        "dev.renzsalanga@gmail.com",
        "renz carlo",
        "salanga",
        "S@langa1998"  
    )
}