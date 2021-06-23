//importando modulos
import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";

//framework para capturar errors de funções async
import "express-async-errors";
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
app.use((err:Error, request: Request, response: Response, next: NextFunction)=>{

    if(err instanceof Error){
        console.log(err)
        return response.status(400).json({
            error:err.message
        });
    }

    return response.status(500).json({status:"error",error: "Error no servidor"});
    
})

//iniciando servidor na port 3000
app.listen(3000,()=>{
    console.log(`servidor ON na port 3000`);
});
