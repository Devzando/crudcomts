import connectionDb from '../database/connection';
import { Repository } from 'typeorm';

import { User } from "../entities/User"

interface IUserCreateDto {
    name: string
    idade: number
}

interface IUserRepository {
    createNewUser(data: IUserCreateDto): Promise<User>
    getAllUser(): Promise<User[]>
}

export  default class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>

    constructor(){
        this.ormRepository = connectionDb.getRepository(User)
    }

    public async createNewUser({name, idade,} : IUserCreateDto): Promise<User> {
        
        const newUser = this.ormRepository.create({
            name,
            idade
        })

        await this.ormRepository.save(newUser)

        return newUser
    }

    public async getAllUser(): Promise<User[]> {
        
        const allUser = await this.ormRepository.find()

        return allUser
    }

}

// const UserRepository = connectionDb.getRepository(User).extend({
//     async createUser(name: string, idade: number) {
//         return query.insert().into(User).values({
//             name,
//             idade
//         })

            
//     },
// })

// export default UserRepository;


