import { IUser } from '@/app/data/dbmodels/User'

export default interface UserRepository {
    insert(user: IUser): Promise<IUser>
}