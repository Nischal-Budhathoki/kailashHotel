import  pinoHttp from "pino-http";
import { logger } from "../logger/pino.logger";
import { info } from "node:console";


export const pinoMiddleware = pinoHttp({
    logger,

    genReqId: (req:any) => req.requestId,
  
    customLogLevel:(req, res, err)=>{
        if(res.statusCode >= 500 || err) return "error";
        if(res.statusCode >= 400 || err ) return "warn";

        return "info";
    },
    customSuccessMessage:(req, res) =>{
        return `${req.method} ${req.url} completed`;
    },

    customErrorMessage:(req, res, err)=>{
        return `${req.method} ${req.url} failed`;

    }
})