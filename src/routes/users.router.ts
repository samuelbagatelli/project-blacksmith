import { Router } from 'express';
import { generateTokenRegister } from '../controllers/users.controller';
import validateUsers from '../middlewares/users.middleware';

const usersRouter = Router();

usersRouter.post('/', validateUsers, generateTokenRegister);

export default usersRouter;