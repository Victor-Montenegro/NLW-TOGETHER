                    // Na maioria das vezes quando importamos um framework, será sinalizado com "...framework", que dentro desse framework existe as tipagem dela, só que não esta literalmente dentro da propria framework, pois como padrao para algumas frameworks, criar uma sub framework a parte com suas tipagem. geralmente ficam em @type/framework
import express from "express";

//realizando chamada da função express 
const app = express();

app.get(`/test`, (response, request)=>{

    request.send(`ola nlw`);
});

app.post(`/test-post`, (response, request)=>{

    request.send(`testando post que não e possviel no browser acessa essa rota diretamente`);
});

//iniciando servidor na port 3000
app.listen(3000,()=>{
    console.log(`servidor ON na port 3000`);
});