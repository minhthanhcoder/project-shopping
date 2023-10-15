import mysql, { Pool, PoolOptions } from "mysql2/promise";
import dotenv from "dotenv"


dotenv.config();
const dataConfig : PoolOptions = ({
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
})

const pool: Pool = mysql.createPool(dataConfig)

export default pool