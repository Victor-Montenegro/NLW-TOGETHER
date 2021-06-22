
import {Request,Response} from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController{

    async handle(request:Request,response:Response){

        //recevendo dados do request do usuario
        const {name,email,admin} = request.body;

        //instanciando o service para tratar as validações 
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name,email,admin});

        return response.json(user);

    }
}

export {CreateUserController};

