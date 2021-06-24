
import { getCustomRepository }  from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepostories";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken" 

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email,password}: IAuthenticateRequest){

        const usersRepositories = getCustomRepository(UsersRepositories);

        // tratando dados do request
        if(!email){
            throw new Error(`email incorreto!`)
        }

        if(!password){
            throw new Error(`password incorreto!`)
        }

        const user = await usersRepositories.findOne({ 
            email
        });

        if(!user){
            throw new Error(`Email/Password incorreto!`)
        }

        //realizando a comparação entre senha e criptografia
        const passwordMath = await compare(password, user.password);

        if(!passwordMath){

            throw new Error(`Email/Password incorreto!`)
        }

        //criando token de autentificação
        const token = sign(
            {
                email:user.email
            },
                "7f354b51be665598315629b58004659d",
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );

        return token;

    }
}


export { AuthenticateUserService };