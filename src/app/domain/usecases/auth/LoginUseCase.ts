import Repositories from '@/app/di/Repositories'

import { IUser } from '@/app/data/dbmodels/User'
import { hash } from '@/app/util/password'

export default async function invoke(
    email: string,
    password: string
): Promise<IUser> {
    const hashedPassword = hash(password)
    return await Repositories.userRespository.getUserBy(email, hashedPassword)
}