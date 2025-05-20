import PostgresService from '@/app/data/sevices/IPostgresService'
import UserRepository from '@/app/domain/repositories/IUserRepository'
import { UserSchema, IUser } from '@/app/data/dbmodels/User'

export default class UserRepositoryImpl implements UserRepository {
    private _postgresService: PostgresService
    
    constructor(postgresService: PostgresService) {
        this._postgresService = postgresService
    }
    
    /**
    * Inserts a new user record into the database.
    *
    * This method adds a user to the `users` table using the provided user data.
    *
    * @param {IUser} user - The user object to be inserted.
    * @returns {Promise<IUser>} A promise that resolves to the inserted user, including the generated ID.
    *
    * @throws {Error} If the database insertion fails or the returned data is invalid.
    */
    async insert(user: IUser): Promise<IUser> {
        const queryResult = await this._postgresService.sql`
            INSERT INTO users(email, firstname, lastname, password)
            VALUES(${user.email}, ${user.firstname}, ${user.lastname}, ${user.password})
            returning *
        `
        return UserSchema.parse(queryResult[0])
    }

    /**
    * Retrieves a user matching the provided email and hashed password.
    *
    * This method queries the database for a user whose email and password match the given values.
    *
    * @param {string} email - The user's email address.
    * @param {string} password - The user's hashed password.
    * @returns {Promise<IUser>} A promise that resolves to the matching user object.
    *
    * @throws {Error} If the database query fails or the result cannot be parsed.
    */
    async getUserBy(email: string, password: string): Promise<IUser> {
        const queryResult = await this._postgresService.sql`
            SELECT * FROM users
            WHERE email=${email} AND password=${password}
        `
        return UserSchema.parse(queryResult[0])
    }
}