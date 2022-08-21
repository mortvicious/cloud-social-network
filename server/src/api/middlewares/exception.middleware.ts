import {ApiException} from "../exception/ApiException"
import {NextFunction, Response} from "express";
import {IGetUserAuthInfoRequest} from "../../interfaces/IGetUserAuthInfoReq";

export = (
    err: ApiException, 
    req: IGetUserAuthInfoRequest, 
    res: Response, 
    next: NextFunction) => {
        if (err instanceof ApiException) {
            return res.status(err.status).send({ message: err.message })
        }
        return res.status(500).send({ message: 'Uncaught internal error' })
}