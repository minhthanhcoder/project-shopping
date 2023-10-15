import  express  from 'express';
import { deleteUser, findAll, findOne } from '../controllers/userControllers';

const userRouter = express.Router();

userRouter.get("/", findAll)
userRouter.get("/:id", findOne)
userRouter.delete("/:id", deleteUser)

export default userRouter;