import {Repository} from "../connection/Connection";
import { Executive } from "../model/Executive";
import { Code } from "../model/Code";
import HttpRequestError from "../errors/HttpRequestError";
import { getConnection } from "typeorm";
import CodeHandler from "../handlers/CodeHandler";
const CryptoJS = require("crypto-js");

export class ExecutiveService {

    constructor() {}
    
    private readonly INVALID_CREDENCIALS = "USUARIO Y/O PASSWORD INCORRECTOS";

    public getExecutive = async () => {
        const executiveRepository = await this.getRepository();
        const res = await executiveRepository.find();
        return res;
    }

    public validate = async (credencials:any) => {
        const executiveRepository = await this.getRepository();
        const res = await executiveRepository.findOne({where : { email : credencials.email}})
        
        if (!res) { throw this.INVALID_CREDENCIALS }

        const bytes  = CryptoJS.AES.decrypt(res.password, process.env.JWT_SECRET);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        if (decryptedData !== credencials.password) {
            throw this.INVALID_CREDENCIALS;
        }
        return res;
    }

    public refresh = async () => {
        const executiveRepository = await this.getRepository();
        const res = await executiveRepository.find();
        return res;
    }

    public createExecutive = async (executive:Executive) => {
        let response:any;
        try {
            const conexion = await Repository.getConnection();
            await getConnection(conexion.name).transaction(async transactionalEntityManager => {

                const ciphertext = CryptoJS.AES.encrypt(executive.password, process.env.JWT_SECRET).toString();
                executive.password = ciphertext;

                const result = await transactionalEntityManager.getRepository(Executive).save(executive);
                const random = CodeHandler.generate();
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

    public updateEmployee = async (executiveID:number , executive:Executive) => {
        const executiveRepository = await this.getRepository();
        let response:any;
        try {
            response = await executiveRepository.update(executiveID , executive ) ; 
        } catch (error) {
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error);  
        }
        return response;
    }

    private getRepository = async () => {
        const repository = await Repository.getConnection();
        return repository.getRepository(Executive);
    }
}
