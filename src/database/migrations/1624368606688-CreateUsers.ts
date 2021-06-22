import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624368606688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //realizando a criação da tabela Users
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid", // universally unique identifier, representado com 32 caracteres, para que nunca se repita 
                        isPrimary: true,
                        // generationStrategy: "uuid" é preferivel que a aplicação gere automaticamente as primary key
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name:"admin",
                        type: "boolean",
                        default: false, // caso esse campo não seja informado, como padrao sera false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()",
                    },

                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        //por algum motivo precisa desfazer essa migration, utilizamos o metodo down
        await queryRunner.dropTable("users");
    }

}
