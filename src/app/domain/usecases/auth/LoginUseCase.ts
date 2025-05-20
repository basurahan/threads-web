import Repositories from '@/app/di/Repositories'

import { IUser } from '@/app/data/dbmodels/User'
import { hash } from '@/app/util/password'

/**
 * Prepares the password for querying in the database.
 * 
 * @param email - The email of the user
 * @param password - A plain text password of the user
 * @returns {Promise<IUser>} A promise the resolves to a user.
 * 
 * @throws {Error} If the database operation fails.
 */
export default async function invoke(
    email: string,
    password: string
): Promise<IUser> {
    const hashedPassword = hash(password)
    return await Repositories.userRespository.getUserBy(email, hashedPassword)
}