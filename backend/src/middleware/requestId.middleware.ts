import { NextFunction, Request, Response } from "express"
import { v4 as uuid } from "uuid"

//request global types
declare global{
    namespace Express {
        interface Request {
            requestId?:string
        }
    }
}


export const requestIdMiddleware = (
    req:Request,
    res:Response,
    next:NextFunction) => {
        const id = uuid();

        req.requestId = id;
        res.setHeader("x-request-id", id);

        next();
    }
