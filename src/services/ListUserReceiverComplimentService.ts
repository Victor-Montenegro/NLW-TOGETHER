import { getCustomRepository } from "typeorm";
import { ComplimentsRepostories } from "../repositories/ComplimentsRepostories";



class ListUserReceiverComplimentService{

    async execute(user_id:String){

        const complimentsRepostories = getCustomRepository(ComplimentsRepostories);

        const compliments = await complimentsRepostories.find({
            where: { 
                user_receiver: user_id
            }
        });

        return compliments;
    }
}

export {ListUserReceiverComplimentService};