
import {EntityRepository, Repository} from "typeorm";

import {User} from "../entities/User";

@EntityRepository(User)
                                    //Repository vai conter todas as funções de manipulação no banco de dados, devemos passar qual será o tipo da entities 
class UsersRepositories extends Repository<User>{}

export {UsersRepositories}