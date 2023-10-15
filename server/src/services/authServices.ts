import pool from "../utils/database"
import bcrypt from "bcrypt"
export const register = async (
    UserName:string,
    Email:string,
    Gender:number,
    DateOfBirth:number,
    Permission:number,
    Address:string,
    Image:string,
    Passwords:string,
    PhoneNumber:string,

)=> {
    //mã hóa mật khẩu
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(Passwords, salt)
    return await pool.execute("CALL Pro_user_create(?,?,?,?,?,?,?,?,?)",[
        UserName,
        Email,
        Gender,
        DateOfBirth,
        Permission,
        Address,
        Image,
        hashPassword,
        PhoneNumber,
    ])
}

export const login = ()=> {
    
}