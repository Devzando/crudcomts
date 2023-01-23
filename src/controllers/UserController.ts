import { Request, Response } from 'express';
import connectionDb from '../database/connection';

import { User } from '../entities/User';
import UserRepository from '../repositories/UserRepository';

interface ICreate {
    name: string,
    idade: number
}

export default class UserController {
    async create(request: Request, response: Response){
        const { name, idade }: ICreate = request.body;

        const userRepository = connectionDb.getRepository(UserRepository)

        const user = new User();
        user.name = name;
        user.idade = idade;

        await userRepository.save(user);

        return response.json(user);
    }
}