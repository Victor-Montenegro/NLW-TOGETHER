//importando getCustomRepository para sinalizar que o nosso usersRepositories e um reposotorio customizado
import {getCustomRepository} from "typeorm"
import {UsersRepositories} from "../repositories/UsersRepostories";

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService{

    //função sicrona para realizar consultas demoradas
    async execute({name,email,admin}: IUserRequest){
        
        //instanciando repository da entidade Users para realizar a manipulação do banco
        const usersRepositories = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error(`Email incorreto`);
        }
        
        const userAlreadyExists = await usersRepositories.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error(`Usuario já existe`);
        }

        //devemos criar o tipo user antes de cadastrar o usuario dentro do banco
        const user = usersRepositories.create({
            name,
            email,
            admin,
        });
        
        //inserindo usuario no banco
        await usersRepositories.save(user);

        return user;
    }

}

export {CreateUserService};