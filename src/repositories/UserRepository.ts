import connectionDb from '../database/connection';
import { QueryBuilder, Repository } from 'typeorm';

import { User } from "../entities/User"

const query = connectionDb.createQueryBuilder()


interface IUserRepositoryDto {
    name: string
    idade: number
}

interface IUserRepository {
    createNewUser(data: IUserRepositoryDto): Promise<User>
}

// class UserRepository implements 

// const UserRepository = connectionDb.getRepository(User).extend({
//     async createUser(name: string, idade: number) {
//         return query.insert().into(User).values({
//             name,
//             idade
//         })

            
//     },
// })

// export default UserRepository;


