import  express from 'express';
import { addCart, getAllCart } from '../controllers/cartControllers';

const cartRouter = express();

cartRouter.get("/", getAllCart)
cartRouter.post("/", addCart)

export default cartRouter