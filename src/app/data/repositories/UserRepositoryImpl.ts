import PostgresService from '@/app/data/sevices/IPostgresService'
import UserRepository from '@/app/domain/repositories/IUserRepository'
import { UserSchema, IUser } from '@/app/data/dbmodels/User'

export default class UserRepositoryImpl implements UserRepository {
    private _postgresService: PostgresService
    
    constructor(postgresService: PostgresService) {
        this._postgresService = postgresService
    }
    
    /**
     * Inserts a new user into the database.
     * 
     * @param {IUser} user - The user to be inserted in the table.
     * @returns {Promise<IUser>} A promise that resolves to the inserted user with a generated ID.
     * 
     * @throws {Error} If the database operation fails.
     */
    async insert(user: IUser): Promise<IUser> {
        const queryResult = await this._postgresService.sql`
            INSERT INTO users(email, firstname, lastname, password)
            VALUES(${user.email}, ${user.firstname}, ${user.lastname}, ${user.password})
            returning *
        `
        return UserSchema.parse(queryResult[0])
    }
}