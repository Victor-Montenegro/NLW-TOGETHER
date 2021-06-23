import { EntityRepository,Repository } from "typeorm"
 
import { Tag } from "../entities/Tag"

@EntityRepository(Tag)

class TagsRepostories extends Repository<Tag>{ }


export { TagsRepostories };
