import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class userMigration1674345168753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    }, 
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "idade",
                        type: "int",
                        default: 0
                    }
                ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
