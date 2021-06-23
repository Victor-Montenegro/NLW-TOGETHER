import { getCustomRepository } from "typeorm"
import { TagsRepostories } from "../repositories/TagsRepostories";

interface ItagRequest{
    name: string,
}

class CreateTagService{

    async execute({name}: ItagRequest){

        const tagsRepostories = getCustomRepository(TagsRepostories);
    
        if(!name){

            throw new Error(`Nome da Tag está incorreto`);
        }

        const tagAlreadyExists = await tagsRepostories.findOne({
             name 
        });

        if(tagAlreadyExists){
            throw new Error(`Tag já cadastrada`);
        }

        const tag = tagsRepostories.create({
            name
        });

        await tagsRepostories.save(tag);
        
        return tag;
    }
}

export {CreateTagService};