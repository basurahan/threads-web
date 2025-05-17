import PostgresService from '@/app/data/sevices/IPostgresService'
import UserRepository from '@/app/domain/repositories/IUserRepository'
import { UserSchema, IUser } from '@/app/data/dbmodels/User'

export default class UserRepositoryImpl implements UserRepository {
    private _postgresService: PostgresService
    
    constructor(postgresService: PostgresService) {
        this._postgresService = postgresService
    }
    
    async insert(user: IUser): Promise<IUser> {
        const queryResult = await this._postgresService.sql`
            INSERT INTO users(email, firstname, lastname, password)
            VALUES(${user.email}, ${user.firstname}, ${user.lastname}, ${user.password})
            returning *
        `
        return UserSchema.parse(queryResult[0])
    }
}