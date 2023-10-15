import express from "express";
import { createProduct, findAllProducts, findProductById } from "../controllers/productsControllers";

const productRouter = express();

productRouter.get("/", findAllProducts)
productRouter.post("/", createProduct)
productRouter.get("/:id", findProductById)

export default productRouter;