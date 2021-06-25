import { getCustomRepository } from "typeorm";

import { TagsRepostories } from "../repositories/TagsRepostories";

import { classToPlain} from "class-transformer"

class ListTagsService{

    async execute(){

        const tagsRepostories = getCustomRepository(TagsRepostories);

        const tags = await tagsRepostories.find();


        return classToPlain(tags);
    }
}

export {ListTagsService};