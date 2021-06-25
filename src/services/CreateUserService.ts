//importando getCustomRepository para sinalizar que o nosso usersRepositories e um reposotorio customizado
import {getCustomRepository} from "typeorm"
import {UsersRepositories} from "../repositories/UsersRepostories";
import { hash } from "bcryptjs"

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService{

    //função sicrona para realizar consultas demoradas
    async execute({name,email,admin = false,password}: IUserRequest){
        
        //instanciando repository da entidade Users para realizar a manipulação do banco
        const usersRepositories = getCustomRepository(UsersRepositories);

        //realizando tratativas para os dados da requisição 
        if(!email){
            throw new Error(`Email incorreto`);
        }

        if(!password){
            throw new Error(`Senha incorreta`)
        }
        
        const userAlreadyExists = await usersRepositories.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error(`Usuario já existe`);
        }

        // criptografando password 
        const passwordHash = await hash(password, 8);
        
        //devemos criar o tipo user antes de cadastrar o usuario dentro do banco
        const user = usersRepositories.create({
            name,
            email,
            admin,
            password: passwordHash,
        });

        //inserindo usuario no banco
        await usersRepositories.save(user);

        return user;
    }

}

export {CreateUserService};