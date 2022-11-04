import { Router } from 'express';
import { generateToken } from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.post('/', generateToken);

export default usersRouter;