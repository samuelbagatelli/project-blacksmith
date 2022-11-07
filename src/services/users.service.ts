import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import { createUser } from '../models/users.model';

const generateToken = async (user: IUser) => {
  if (user.classe) { await createUser(user); }
  const token = jwt
    .sign(
      { username: user.username, password: user.password }, 
      process.env.JWT_SECRET as string, 
      { algorithm: 'HS256' },
    );

  return token;
};

export default {
  generateToken,
};
