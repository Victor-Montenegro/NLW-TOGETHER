//importando modulos
import "reflect-metadata";
import express from "express";
import {Request,Response} from "express";
import { router } from "./routes";

import "./database";

//realizando chamada da função express 
const app = express();

//possibilitando que o servidor receba tipos de dados json e urlencoded
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//inserindo todas as routes dentro do server app
app.use(router);

//tratando erros externos da aplicação


//iniciando servidor na port 3000
app.listen(3000,()=>{
    console.log(`servidor ON na port 3000`);
});
