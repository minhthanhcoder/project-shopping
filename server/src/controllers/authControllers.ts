import { Request, Response } from "express"
import * as authServices from "../services/authServices"


export const register = async (req:Request, res:Response)=> {
    try {
        const { 
            UserName,
            Email,
            Gender,
            DateOfBirth,
            Permission,
            Address,
            Image,
            Passwords,
            PhoneNumber,
        } = req.body;

        await authServices.register(
            UserName,
            Email,
            Gender,
            DateOfBirth,
            Permission,
            Address,
            Image,
            Passwords,
            PhoneNumber,)

        return res.status(201).json({
            status:201,
            message: " đăng ký thành công"
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message: "Lỗi controllers",
            err: error
        })
    }
}