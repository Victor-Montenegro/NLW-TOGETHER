//verificando se o usuario é um admin
import { Request, Response, NextFunction} from "express"


export function ensureAdmin(request: Request,response: Response, next: NextFunction){

    //provisorio
    const admin = false

    if(admin){
        return next();
    }

    response.status(401).json({
        err: "Usuario não é autorizado"
    })

}