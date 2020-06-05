import { ExecutiveController } from "../controller/ExecutiveController";
import { CodeController } from "../controller/CodeController";

export class Router {

    private routes: any;
    private executiveController: ExecutiveController;
    private codeController: CodeController;

    constructor(){
        this.executiveController = new ExecutiveController();
        this.codeController = new CodeController()
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/ejecutivos/auth/sesion')
        .post(this.executiveController.validateExecutive);

        this.routes.route('/ejecutivos/auth/claves')
        .get(this.codeController.generateCode)
        .post(this.codeController.validateCode);
        
        this.routes.route('/ejecutivos/:id')
        .put(this.executiveController.updateExecutive)
        
        this.routes.route('/ejecutivos')
        .get(this.executiveController.getExecutive)
        .post(this.executiveController.createExecutive)

    }

    public getRoutes(){
        return this.routes;
    }

}

