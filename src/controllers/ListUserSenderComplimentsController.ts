//modulos
import { Request,Response}  from "express";

import { ListUserSenderComplimentService } from "../services/ListUserSenderComplimentService";


class ListUserSenderComplimentsController{

    async handle(request: Request, response: Response){

        //capturando user_id
        const { user_id } = request;

        const listUserSenderComplimentService = new ListUserSenderComplimentService();

        const compliments = await listUserSenderComplimentService.execute(user_id);

        response.json(compliments);
    }
}

export {ListUserSenderComplimentsController};