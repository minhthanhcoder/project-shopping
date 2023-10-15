import { Request, Response } from "express";
import * as userService from "../services/userService"
//check email 
export const checkEmailExits = async (req:Request, res:Response, next:any)=> {
try {
    const {Email} = req.body;
    console.log("Email register",Email);
    
    
    //gửi vào service để lấy dữ liệu
    const [email]:any = await userService.findOneByEmail(Email)
    
    console.log("email sau check", email[0]);
    if (!Array.isArray(email)) {
        throw new Error("Kiểu dữ liệu không hợp lệ")
    }
    if(email[0].length > 0) {
        return res.status(400).json({
            status:400,
            message: " Tài khoản đã tồn tại"
        })
      
    } else {
        next()
        return "Next";
    }
    
} catch (error) {
    return res.status(500).json({
        status: 500,
        message: error
    })
}
}