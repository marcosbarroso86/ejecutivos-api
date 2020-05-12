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

    public getEmployeeById = (req: Request , res: Response ) => {
        let employeeId:number =  parseInt(req.params.id);
        this.executiveService.getExecutiveByID(employeeId)
        .then((employees:Executive) => {
            HTTPResponseHandler.sendSuccess(res , employees);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)
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

    public validate = (req: Request, res: Response) => {

    }

    public refresh = (req: Request, res: Response) => {
        
    }
   
}
