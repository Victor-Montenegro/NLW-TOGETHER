import { getCustomRepository } from "typeorm";
import { ComplimentsRepostories } from "../repositories/ComplimentsRepostories";



class ListUserSenderComplimentService{

    async execute(user_id:String){

        const complimentsRepostories = getCustomRepository(ComplimentsRepostories);

        const compliments = await complimentsRepostories.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender","userReceiver","tag"]
        });

        return compliments;

    }
}


export { ListUserSenderComplimentService };