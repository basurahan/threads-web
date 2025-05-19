import Repositories from '@/app/di/Repositories'

import { IUser, UserSchema } from '@/app/data/dbmodels/User'

export default async function invoke(
    email: string,
    password: string
): Promise<IUser> {
    return await Repositories.userRespository.getUserBy(email, password)
}