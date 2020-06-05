import {Request, Response} from "express";
import { ExecutiveService } from "../service/ExecutiveService";
import { Executive } from "../model/Executive";
import HTTPResponseHandler from "../handlers/HTTPResponseHandler";

export class ExecutiveController {

    private executiveService: ExecutiveService;
    
    constructor() {
        this.executiveService = new ExecutiveService();
    }

    public createExecutive = (req: Request , res: Response ) => {
        let executive:Executive = req.body;
        this.executiveService.createExecutive(executive)
        .then((response:any) => {
            HTTPResponseHandler.sendCreate(res);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null);
        });
    }

    public getExecutive = (req: Request , res: Response ) => {
        
        this.executiveService.getExecutive()
        .then((executives:any) => {
            HTTPResponseHandler.sendSuccess(res , executives);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)
        });
    }

    public validateExecutive = (req: Request, res: Response) => {
        const credencials = req.body;
        console.log(credencials);
        this.executiveService.validate(credencials)
        .then((executive:any) => {
            HTTPResponseHandler.sendSuccess(res , executive);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)
        })
    }

    public updateExecutive = (req: Request , res : Response) => {
       /*  let executiveID:number = parseInt(req.params.id);
        let employee: any = req.body;
        this.executiveService.updateExecutive(executiveID , employee)
        .then((response:any) => {
            HTTPResponseHandler.sendEmpty(res);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)  
        }); */
    }
   
}
