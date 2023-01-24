import { Request, Response } from 'express';

import { User } from '../entities/User';
import UserRepository from '../repositories/UserRepository';

interface ICreate {
    id: number
    name: string,
    idade: number
}

export default class UserController {
    async create(request: Request, response: Response){
        const { name, idade }: ICreate = request.body;

        const userRepository = new UserRepository()
        
        const user = await userRepository.createNewUser({name, idade})
        
        return response.json(user);
    }
    
    async getAllUsers(request: Request, response: Response){
        const userRepository = new UserRepository()

        const users = await userRepository.getAllUser();

        return response.json(users)
    }
}