import services from '@/app/di/Services'

import IUserRepository from '@/app/domain/repositories/IUserRepository'
import UserRepositoryImpl from '@/app/data/repositories/UserRepositoryImpl'

interface RepositoriesImplementations {
    readonly userRespository: IUserRepository
}

class Repositories implements RepositoriesImplementations {
    private _userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository
    }

    get userRespository(): IUserRepository {
        return this._userRepository
    }
}

// pass the implementations here
const repositories = new Repositories(
    new UserRepositoryImpl(services.postgresService)
)
export default repositories