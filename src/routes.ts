//importando função Router para inserir os verbos http na rota

//modulos
import {Router} from "express";

//controllers
import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {AuthenticateUserController } from "./controllers/AuthenticationUserController";
import {CreateComplimentController} from "./controllers/CreateComplimentController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListUserReceiverComplimentController}  from "./controllers/ListUserReceiverComplimentController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
//middlewares
import {ensureAuthenticated} from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentController = new ListUserReceiverComplimentController();
const listTagController = new ListTagsController();
const listUsersController = new ListUsersController(); 
 
router.post(`/users`,createUserController.handle);
router.get(`/users`, ensureAuthenticated,listUsersController.handle)
router.post(`/tags`,ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get(`/tags`, ensureAuthenticated, listTagController.handle);

router.post(`/login`, authenticateUserController.handle);

router.post(`/compliments`,ensureAuthenticated, createComplimentController.handle);
router.get(`/users/compliments/send`,ensureAuthenticated, listUserSenderComplimentController.handle);
router.get(`/users/compliments/receive`,ensureAuthenticated, listUserReceiverComplimentController.handle);

export {router};

