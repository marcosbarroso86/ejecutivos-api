import {Repository} from "../connection/Connection";
import { Employee } from "../model/Employee";
import HttpRequestError from "../errors/HttpRequestError";

export class EmployeeService {

    constructor() {}

    public getEmployess = async () => {
        const employeeRepository = await this.getRepository();
        const res = await employeeRepository.find();
        return res;
    }

    public getEmployeeById = async (emplooyeID:number) => {
        const employeeRepository = await this.getRepository();
        const res = await employeeRepository.findOne(emplooyeID);
        return res;
    }

    public createEmployee = async (employee:Employee) => {
        const employeeRepository = await this.getRepository();
        let response:any;
        try {
            response = await employeeRepository.save(employee);         
        } catch (error) {
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error);
        }
        return response;
    }

    public updateEmployee = async (employeeID:number , employee:Employee) => {
        const employeeRepository = await this.getRepository();
        let response:any;
        try {
            response = await employeeRepository.update(employeeID , employee ) ; 
        } catch (error) {
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error);  
        }
        return response;
    }

    public deleteEmployee = async (employeeID:number) => {
        const employeeRepository = await this.getRepository();
        let response:any;
        try {
            response = await employeeRepository.delete(employeeID);
        } catch (error) {
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error);
        }
        return response;
    }

    private getRepository = async () => {
        const repository = await Repository.getConnection();
        return repository.getRepository(Employee);
    }
}
