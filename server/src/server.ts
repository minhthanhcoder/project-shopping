import express, { Request, Response } from "express";
import userRouter from "./routes/userRouter";
import authRouter from "./routes/authRouter";
import bodyParser from "body-parser";
import productRouter from "./routes/product.routes";


const server = express();
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))


server.use("/api/v1/users", userRouter);
server.use("/api/v1/auth", authRouter);
server.use("/api/v1/products", productRouter)

server.listen(8080, ()=>{
console.log("http://localhost:8080");
})