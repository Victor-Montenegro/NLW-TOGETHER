import { Request,Response } from "express"

import {CreateComplimentService} from "../services/CreateComplimentService"
class CreateComplimentController{

    async handle(request: Request, response: Response){

        //capturando dados do request
        const {user_sender, user_receiver, message, tag_id } = request.body;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({user_sender, user_receiver,message, tag_id});

        response.json(compliment);
    }

}

export { CreateComplimentController}