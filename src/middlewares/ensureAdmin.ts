//verificando se o usuario é um admin
//importando modulos
import { Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm";
//importando repository
import { UsersRepositories } from "../repositories/UsersRepostories"

export async function ensureAdmin(request: Request,response: Response, next: NextFunction){

    //capturando id do usuario autentificado
    const { user_id } = request;

    const usersRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await usersRepositories.findOne(user_id);

    if(admin){
        return next();
    }

    return response.status(401).json({
        err: "Usuario não é autorizado"
    })

}