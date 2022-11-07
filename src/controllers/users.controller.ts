import { Request, Response } from 'express';
import usersService from '../services/users.service';

export const generateTokenRegister = async (req: Request, res: Response) => {
  const token = await usersService.generateToken(req.body);

  res.status(201).json({ token });
};

export const generateTokenLogin = async (req: Request, res: Response) => {
  const token = await usersService.generateToken(req.body);

  res.status(200).json({ token });
};