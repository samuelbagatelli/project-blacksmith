import { Request, Response } from 'express';
import usersService from '../services/users.service';

export const generateToken = async (req: Request, res: Response) => {
  const token = await usersService.generateToken(req.body);

  res.status(201).json({ token });
};

export const anything = 'any';