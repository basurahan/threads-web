import postgres from 'postgres';

export default interface IPostgresService {
    readonly sql: postgres.Sql
}