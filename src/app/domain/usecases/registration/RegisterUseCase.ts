import Repositories from '@/app/di/Repositories'

import { IUser, UserSchema } from '@/app/data/dbmodels/User'

/**
 * Prepares the user data before inserting into the database.
 * password will hashed.
 * 
 * @param {string} email - A valid email of the user, will not be validated here.
 * @param {string} firstname - The firstname of the user.
 * @param {string} lastname - The lastname of the user.
 * @param {string} password - Plaintext password of the user.
 * @returns {Promise<IUser>} A promise that resolves to the inserted user with a generated ID.
 * 
 * @throws {Error} If the database operation fails.
 */
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