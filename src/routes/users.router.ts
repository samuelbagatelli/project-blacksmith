import { Router } from 'express';
import { generateTokenRegister } from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.post('/', generateTokenRegister);

export default usersRouter;