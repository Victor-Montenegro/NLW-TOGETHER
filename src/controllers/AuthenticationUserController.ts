import { Request, Response} from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticateUserController{
    
    async handle(request: Request, response: Response){

        //capturando request
        const { email,password } = request.body;

        //instanciando service
        const authenticationUserService = new AuthenticateUserService();

        const token = await authenticationUserService.execute({email, password});

        response.json({token: token});
    }
}

export { AuthenticateUserController }