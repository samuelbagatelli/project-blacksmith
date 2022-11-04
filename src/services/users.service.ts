// import Joi from 'joi';
import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import usersModel from '../models/users.model';

const generateToken = async (user: IUser) => {
  await usersModel.createUser(user);
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
