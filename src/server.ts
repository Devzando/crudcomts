import "reflect-metadata";
import express from 'express';

import connectionDb from "./database/connection";
import routers from "./router";

const app = express();
app.use(express.json());
app.use(routers);

connectionDb.initialize().then(res => console.log("database is running"));



const Port = 3333 || process.env.Port;
app.listen(Port, () => console.log("Server is running..."));