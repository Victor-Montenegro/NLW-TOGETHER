//realizando o import para sinalizar a class como uma entity e as colunas da tabela
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn  } from "typeorm";

// importando framework para gerar chaves dos id
import {v4 as uuid} from "uuid";

@Entity(`tags`)
class Tag{

    @PrimaryColumn()
    readonly id: String;

    @Column()
    name: String;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor(){

        if(!this.id){
            this.id = uuid();
        }
    }
}


export { Tag };