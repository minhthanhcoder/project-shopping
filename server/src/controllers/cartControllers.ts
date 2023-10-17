import { Request, Response } from "express"
import { handleError } from "../utils/errMsg"

export const getAllCart = async(req:Request,res:Response)=> {
try {
    
} catch (error:any) {
    handleError(res, error, 500)
}
}

export const addCart = async(req:Request,res:Response)=> {

}