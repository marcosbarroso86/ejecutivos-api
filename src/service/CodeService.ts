import {Repository} from "../connection/Connection";
import { Executive } from "../model/Executive";
import { Code } from "../model/Code";
import HttpRequestError from "../errors/HttpRequestError";
import { getConnection } from "typeorm";
import CodeHandler from "../handlers/CodeHandler";
const CryptoJS = require("crypto-js");

export class CodeService {

    constructor() {}
    private readonly INVALID_CODE = "LA CLAVE INGRESADA NO ES VALIDA";
    private readonly INVALID_USER = "EL USUARIO NO EXISTE"

    public validate = async (code:any) => {
        const codeRepository = await this.getRepository();
        const res = await codeRepository.findOne({where : {code}});
        if (!res) {throw this.INVALID_CODE};
        return res;
    }
    public generate = async (email) => {
        let response:any;
        try {
            const conexion = await Repository.getConnection();
            await getConnection(conexion.name).transaction(async transactionalEntityManager => {

                const user = await transactionalEntityManager.getRepository(Executive)
                .findOne({ where : { email }});

                if (!user) {throw this.INVALID_USER}

                const random = CodeHandler.generate();
                const code:any = {code : random , executive : user };

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
        return repository.getRepository(Code);
    }
}
