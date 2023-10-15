import express from "express"
import { register } from "../controllers/authControllers";
import { checkEmailExits } from "../middlewares/authMiddlewares";

const authRouter = express.Router();
 authRouter.post("/register",checkEmailExits ,register)
export default authRouter;