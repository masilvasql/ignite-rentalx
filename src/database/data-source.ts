import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    synchronize: false,
    logging: false,
    entities: [],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
});

export function createConnection(host = "database"): Promise<DataSource> {
    return AppDataSource.setOptions({ host })
        .initialize()
        .then(() => {
            console.log("Database is connected");
            return AppDataSource;
        })
        .catch((err) => {
            console.warn("Fail to connect database ", err);
            return AppDataSource;
        });
}

export default AppDataSource;
