import postgres from 'postgres'
import PostgresService from '@/app/data/sevices/IPostgresService'

export default class SupabaseService implements PostgresService {
    private _sql: postgres.Sql

    constructor(sql: postgres.Sql) {
        this._sql = sql
    }

    get sql(): postgres.Sql {
        return this._sql
    }
}