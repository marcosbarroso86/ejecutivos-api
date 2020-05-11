import { Response, Request } from "express";
import JWTHandler from "../handlers/JWTHandler";

class Interceptor {
    
    constructor(){}

    public intercept = (req: Request , res:Response , next:Function) => {

        let token:string = null;
        
        if (req.headers && req.headers.authorization) {
            token = req.headers.authorization.toString();
        }

        JWTHandler.verify(token)
            .then((payload) => {
                next()
            })
            .catch((error) => {
                res.sendStatus(403)
            })   
                
    }
}

export default new Interceptor();