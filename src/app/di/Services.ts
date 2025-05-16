import postgres from 'postgres'

import IPostgresService from '@/app/data/sevices/IPostgresService'
import SupabaseService from '@/app/data/sevices/impl/SupabaseService'

interface ServicesImplementations {
    readonly postgresService: IPostgresService
}

class Services implements ServicesImplementations {
    private _postgresService: IPostgresService

    constructor(postgresService: IPostgresService) {
        this._postgresService = postgresService
    }

    get postgresService(): IPostgresService {
        return this._postgresService
    }
}

// pass the implemtations here
export default new Services(
    new SupabaseService(postgres(process.env.POSTGRES_URL!, { ssl: "require" }))
)