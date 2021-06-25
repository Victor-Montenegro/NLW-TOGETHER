//modulos
import { Request, Response, NextFunction} from "express";

import { verify } from "jsonwebtoken"

interface IPayload{

    sub: string;
}
 
//middleware para capturar o token de autentificação do usuario para realizar todos as tratativas de login durante a sessão
export function ensureAuthenticated(request:Request, response: Response, next: NextFunction){
      
        //capturar token
        const tokenAuth = request.headers.authorization;
        //verificar se o token está preenchido

        if(!tokenAuth){

           return response.status(401).end();
        }

        const [,token] = tokenAuth.split(" ")

        //verificar se o token e valido atraves do fremework

        try {
            
           const { sub } = verify(token, "7f354b51be665598315629b58004659d") as IPayload;
           
           request.user_id = sub;
           
           return next();
        } catch (err) {
            return response.status(401).end();
        }


    }
