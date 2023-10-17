import express, { Request, Response } from "express";
import userRouter from "./routes/userRouter";
import authRouter from "./routes/authRouter";
import bodyParser from "body-parser";
import productRouter from "./routes/product.routes";
import cors from "cors"
import cartRouter from "./routes/cartRouter";


const server = express();
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))
server.use(cors())


server.use("/api/v1/users", userRouter);
server.use("/api/v1/auth", authRouter);
server.use("/api/v1/products", productRouter)
server.use("/api/v1/cart", cartRouter)

server.listen(8000, ()=>{
console.log("http://localhost:8000");
})