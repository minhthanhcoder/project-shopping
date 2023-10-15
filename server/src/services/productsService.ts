import pool from "../utils/database";

export const findAll = async () => {
    return await pool.execute("CALL Pro_product_findAll()")
}

export const findProById = async (id:number) => {
    return await pool.execute("CALL Pro_product_findOnePro(?)",[id])
}


export const createPro = async (
    ProductName:string,
    CategoryId:number,
    Price:number,
    Descriptions:string,
    Image:string,
    Discount:number) => {
    return await pool.execute("CALL Pro_product_create(?,?,?,?,?,?)",[ProductName, CategoryId, Price,Descriptions,Image,Discount])
}