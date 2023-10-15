import pool from "../utils/database";

export const findAll = async() => {
    return await pool.execute("CALL Pro_user_findAll()")
}

export const findOne = async(id: number) => {
    return await pool.execute("CALL Pro_user_findOne(?)",[id])
}

//get user by email
export const findOneByEmail = async(email: string) => {
    return await pool.execute("CALL Pro_user_findOneByEmail(?)",[email])
}

export const deleteUser = async(id: number) => {
    return await pool.execute("CALL Pro_user_deleteUser(?)",[id])
}