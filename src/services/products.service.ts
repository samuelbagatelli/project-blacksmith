import { IProduct } from '../interfaces';
import { postProduct } from '../models/products.model';

export const createProduct = async (name: string, amount: string): Promise<IProduct> => {
  const product = await postProduct(name, amount);
  return product;
};

export const anything = 'any';