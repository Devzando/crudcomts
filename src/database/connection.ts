import { DataSource } from "typeorm";
import { userMigration1674345168753 } from "./migrations/1674345168753-userMigration";

const connectionDb = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"]
});

export default connectionDb;