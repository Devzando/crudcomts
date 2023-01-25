import 'dotenv/config'
import { DataSource } from "typeorm";

const connectionDb = new DataSource({
    type: "mssql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"]
});

export default connectionDb;