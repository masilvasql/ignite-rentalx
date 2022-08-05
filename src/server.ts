import "reflect-metadata";
import express from "express";
import swaggerUI from "swagger-ui-express";

import { createConnection } from "./database/data-source";
import "./shared/container";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
    console.log("Server is running on port 3333");
});
