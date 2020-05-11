import {Request, Response} from "express";
import { EmployeeService } from "../service/EmployeeService";
import { Employee } from "../model/Employee";
import HTTPResponseHandler from "../handlers/HTTPResponseHandler";

export class EmployeeController {

    private employeeService: EmployeeService;
    
    constructor() {
        this.employeeService = new EmployeeService();
    }

    public getEmployees = (req: Request , res: Response ) => {
        this.employeeService.getEmployess()
        .then((employees:Employee[]) => {
            HTTPResponseHandler.sendSuccess(res , employees);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null);
        });
    }

    public createEmployee = (req: Request , res: Response ) => {
        let employee:Employee = req.body;
        this.employeeService.createEmployee(employee)
        .then((response:any) => {
            HTTPResponseHandler.sendCreate(res);
        })
        .catch((err) => {
            HTTPResponseHandler.sendInternalError(res , err , null);
        });
    }

    public getEmployeeById = (req: Request , res: Response ) => {
        let employeeId:number =  parseInt(req.params.id);
        this.employeeService.getEmployeeById(employeeId)
        .then((employees:Employee) => {
            HTTPResponseHandler.sendSuccess(res , employees);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)
        });
    }

    public deleteEmployee = (req: Request , res: Response) => {
        let employeeID:number = parseInt(req.params.id);
        this.employeeService.deleteEmployee(employeeID)
        .then((response:any) => {
            HTTPResponseHandler.sendEmpty(res);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)
        });
    }

    public updateEmployee = (req: Request , res : Response) => {
        let employeeID:number = parseInt(req.params.id);
        let employee: any = req.body;
        this.employeeService.updateEmployee(employeeID , employee)
        .then((response:any) => {
            HTTPResponseHandler.sendEmpty(res);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)  
        });
    }
}
