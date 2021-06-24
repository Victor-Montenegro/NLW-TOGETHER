import { EntityRepository,Repository } from "typeorm"

import { Compliment } from "../entities/Compliment"

@EntityRepository(Compliment)
class ComplimentsRepostories extends Repository<Compliment> {}


export {ComplimentsRepostories};