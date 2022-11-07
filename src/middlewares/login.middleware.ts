import { Request, Response, NextFunction } from 'express';
import { findOneUser } from '../models/users.model';
import loginSchema from '../validations/login.schema';

export const reqBodyValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  next();
};

export const nameValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  const result = await findOneUser({ username });

  if (!result) return res.status(401).json({ message: 'Username or password invalid' });

  next();
};

export const passwordValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  const result = await findOneUser({ password });

  if (!result) return res.status(401).json({ message: 'Username or password invalid' });

  next();
};