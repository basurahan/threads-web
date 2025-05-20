import Repositories from '@/app/di/Repositories'

import { IUser } from '@/app/data/dbmodels/User'
import { hash } from '@/app/util/password'

/**
 * Authenticates a user using their email and password.
 *
 * This function hashes the provided plain text password and attempts to retrieve
 * the corresponding user from the database using the given email and hashed password.
 *
 * @param {string} email - The email address of the user attempting to log in.
 * @param {string} password - The plain text password provided by the user.
 * @returns {Promise<IUser>} A promise that resolves with the authenticated user object.
 *
 * @throws {Error} If the database query fails or if the user is not found.
 */
export default async function invoke(
    email: string,
    password: string
): Promise<IUser> {
    const hashedPassword = hash(password)
    return await Repositories.userRespository.getUserBy(email, hashedPassword)
}