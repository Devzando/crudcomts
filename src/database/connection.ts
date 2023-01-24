import { DataSource } from "typeorm";

const connectionDb = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"]
});

export default connectionDb;