//importando função Router para inserir os verbos http na rota
import {Router} from "express";

import {CreateUserController} from "./controllers/CreateUserController";


const router = Router();

const createUserController = new CreateUserController();

router.post(`/users`,createUserController.handle);

export {router};

