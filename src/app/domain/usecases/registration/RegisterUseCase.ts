import Repositories from '@/app/di/Repositories'

export default async function invoke(
    email: string,
    firstname: string,
    lastname: string,
    password: string
) {
    await Repositories.userRespository.insert({ email, firstname, lastname, password })
}