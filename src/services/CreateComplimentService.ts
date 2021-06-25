import { getCustomRepository } from "typeorm"
import { ComplimentsRepostories} from "../repositories/ComplimentsRepostories"
import { UsersRepositories } from  "../repositories/UsersRepostories"

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService{

    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest){

        const complimentsRepostories = getCustomRepository(ComplimentsRepostories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        if(!user_receiver){
            throw new Error(`Usuario incorreto!`);
        }

        if(!tag_id){
            throw new Error(`Tag incorreta!`);
        }

        if(user_receiver == user_sender){
            throw new Error(`User receiver incorret`);
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error(`Usuario não existe!`);
        }

        const compliment = complimentsRepostories.create({
            tag_id,
            user_receiver,
            user_sender,
            message,
        });

        await complimentsRepostories.save(compliment);

        return compliment;

    }
}

export {CreateComplimentService};