import Repositories from '@/app/di/Repositories'

import { IUser, UserSchema } from '@/app/data/dbmodels/User'

export default async function invoke(
    email: string,
    firstname: string,
    lastname: string,
    password: string
): Promise<IUser> {
    const payload = { email, firstname, lastname, password }
    const user = UserSchema.parse(payload)
    return await Repositories.userRespository.insert(user)
}