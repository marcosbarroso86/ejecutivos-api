import { EmployeeController } from "../controller/EmployeeController";

export class Router {

    private routes: any;
    private employeeController:EmployeeController;

    constructor(){
        this.employeeController = new EmployeeController();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/employees')
        .get(this.employeeController.getEmployees);

        this.routes.route('/employees')
        .post(this.employeeController.createEmployee);

        this.routes.route('/employees/:id')
        .get(this.employeeController.getEmployeeById)
        .delete(this.employeeController.deleteEmployee)
        .put(this.employeeController.updateEmployee)
    }

    public getRoutes(){
        return this.routes;
    }

}

