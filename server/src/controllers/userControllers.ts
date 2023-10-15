import { Request, Response } from "express";
import * as userService from "../services/userService"
export const findAll =  async (req:Request, res:Response) => {
try {
    const [users] =  await userService.findAll();
    if (!Array.isArray(users)) {
        throw new Error("Kiểu dữ liệu không hợp lệ.")
    }
    return res.status(200).json({
        status: 200,
        users: users[0]
    })
} catch (error) {
    return res.status(500).json({
        status: 500,
        message: error
    })
}
}


export const findOne =  async (req:Request, res:Response) => {
    try {
        const id = Number(req.params.id);
        const [user] =  await userService.findOne(id);
        if (!Array.isArray(user)) {
            throw new Error("Kiểu dữ liệu không hợp lệ.")
        }
        return res.status(200).json({
            status: 200,
            users: user[0]
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error
        })
    }
    }


    export const deleteUser =  async (req:Request, res:Response) => {
        try {
            const id = Number(req.params.id);
             await userService.deleteUser(id);
           
            return res.status(200).json({
                status: 200,
                message: "đã xóa dữ liệu"
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: error
            })
        }
        }