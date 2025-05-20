import Repositories from '@/app/di/Repositories'

import { IUser, UserSchema } from '@/app/data/dbmodels/User'
import { hash } from '@/app/util/password'

/**
 * Prepares and inserts a new user into the database.
 *
 * This function hashes the user's plain text password, validates the user data
 * against the defined schema, and inserts the resulting user object into the database.
 *
 * @param {string} email - The user's email address.
 * @param {string} firstname - The user's first name.
 * @param {string} lastname - The user's last name.
 * @param {string} password - The user's plain text password, which will be hashed before storage.
 * @returns {Promise<IUser>} A promise that resolves to the newly inserted user object, including a generated ID.
 *
 * @throws {Error} If validation fails or the database insertion encounters an error.
 */
export default async function invoke(
    email: string,
    firstname: string,
    lastname: string,
    password: string
): Promise<IUser> {
    const hashedPassword = hash(password)
    const payload = { email, firstname, lastname, password: hashedPassword }
    const user = UserSchema.parse(payload)
    return await Repositories.userRespository.insert(user)
}