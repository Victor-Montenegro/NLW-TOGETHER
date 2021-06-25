import { Request,Response } from "express"

import {CreateComplimentService} from "../services/CreateComplimentService"
class CreateComplimentController{

    async handle(request: Request, response: Response){

        //capturando dados do request
        const {user_receiver, message, tag_id } = request.body;

        //capturando user_id 
        const { user_id } = request;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({user_sender: user_id, user_receiver,message, tag_id});

        response.json(compliment);
    }

}

export { CreateComplimentController}