import { Router } from 'express';
import { generateTokenLogin } from '../controllers/users.controller';
import { 
  reqBodyValidation, 
  nameValidation, 
  passwordValidation, 
} from '../middlewares/login.middleware';

const loginRouter = Router();

loginRouter.post('/', reqBodyValidation, nameValidation, passwordValidation, generateTokenLogin);

export default loginRouter;