import {Request, Response} from "express";
import { CodeService } from "../service/CodeService";
import { Executive } from "../model/Executive";
import HTTPResponseHandler from "../handlers/HTTPResponseHandler";

export class CodeController {

    private codeService: CodeService;
    
    constructor() {
        this.codeService = new CodeService();
    }

    public validateCode = (req: Request, res: Response) => {
        const code = req.body;
        this.codeService.validate(code)
        .then((executive:any) => {
            HTTPResponseHandler.sendSuccess(res , executive);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)
        })

    }

    public generateCode = (req: Request, res: Response) => {
        
    }
   
}
