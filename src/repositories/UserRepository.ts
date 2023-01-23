import connectionDb from '../database/connection';
import { QueryBuilder, Repository } from 'typeorm';

import { User } from "../entities/User"


export const UserRepository = connectionDb.getRepository(User).extend({
    findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany()
    },
})

export default UserRepository;


