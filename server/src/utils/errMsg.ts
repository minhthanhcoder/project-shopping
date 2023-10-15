import { Response } from "express"

export const handleError = (res:Response, err:string, statusCode:number) => {
    return res.status(statusCode).json({
        devMsg: err,
        status: statusCode
    })
}