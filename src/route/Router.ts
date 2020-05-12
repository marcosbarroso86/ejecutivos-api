import { ExecutiveController } from "../controller/ExecutiveController";

export class Router {

    private routes: any;
    private executiveController: ExecutiveController;

    constructor(){
        this.executiveController = new ExecutiveController();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/ejecutivos/auth/sesion')
        .post(this.executiveController.validate);

        this.routes.route('/ejecutivos/auth/claves')
        .post(this.executiveController.refresh);

        this.routes.route('/ejecutivos')
        .get(this.executiveController.getExecutive)
        .post(this.executiveController.createExecutive);

        // TODO: UPDATE EXECUTIVE PASSWORD SERVICE
    }

    public getRoutes(){
        return this.routes;
    }

}

