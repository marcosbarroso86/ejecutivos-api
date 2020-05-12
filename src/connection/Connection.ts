import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import { Executive } from "../model/Executive";
import {Code} from "../model/Code";

export class Repository {

    private static connection: Connection;

    public static getInstace = async () : Promise<Connection> => {
        if(!Repository.connection) {
            if(Repository.connection) {
                return Repository.connection;
            } else {

                let options:any = {
                    type: process.env.type,
                    host: process.env.host,
                    port: parseInt(process.env.port),
                    username: process.env.username,
                    password: process.env.password,
                    schema: process.env.schema,
                    database : process.env.database,
                    entities : [
                        Executive,
                        Code
                    ],
                    autoSchemaSync: true,
                    synchronize : false,
                    logging : true
                }
                const connection = await createConnection(options);
                Repository.connection = connection;
            }
        }
        return Repository.connection;
    }

    public static getConnection = async () => {
        const connection = await Repository.getInstace();
        return connection;
    }
}

