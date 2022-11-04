import { Request, Response } from 'express';
import productsService from '../services/products.service';

export const postProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const product = await productsService.postProduct(name, amount);
  res.status(201).json(product);
};

export const getAllProducts = async (_req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};
