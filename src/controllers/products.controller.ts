import { Request, Response } from 'express';
import { createProduct } from '../services/products.service';

export const postProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const result = await createProduct(name, amount);
  res.status(201).json(result);
};

export const anything = 'any';