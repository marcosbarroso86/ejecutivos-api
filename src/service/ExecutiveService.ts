import {Repository} from "../connection/Connection";
import { Executive } from "../model/Executive";
import { Code } from "../model/Code";
import HttpRequestError from "../errors/HttpRequestError";
import { getConnection } from "typeorm";

export class ExecutiveService {

    constructor() {}

    public getExecutive = async () => {
        const executiveRepository = await this.getRepository();
        const res = await executiveRepository.find();
        return res;
    }

    public validate = async () => {
        const executiveRepository = await this.getRepository();
        const res = await executiveRepository.find();
        return res;
    }

    public refresh = async () => {
        const executiveRepository = await this.getRepository();
        const res = await executiveRepository.find();
        return res;
    }

    public getExecutiveByID = async (emplooyeID:number) => {
        const executiveRepository = await this.getRepository();
        const res = await executiveRepository.findOne(emplooyeID);
        return res;
    }

    public createExecutive = async (executive:Executive) => {
        let response:any;
        try {
            const conexion = await Repository.getConnection();
            await getConnection(conexion.name).transaction(async transactionalEntityManager => {
                const result = await transactionalEntityManager.getRepository(Executive).save(executive);
                const random = Math.round(Math.random()*99999999);
                const code:any = {code : random , executive : result };

                response = await transactionalEntityManager
                    .getRepository(Code).save(code);
                }
            )

        } catch (error) {
            console.log(error);
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error);
        }
        return response;
    }

    private getRepository = async () => {
        const repository = await Repository.getConnection();
        return repository.getRepository(Executive);
    }
}
