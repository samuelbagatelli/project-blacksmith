import { IProduct } from '../interfaces';
import productsModel from '../models/products.model';

const postProduct = async (name: string, amount: string): Promise<IProduct> => {
  const product = await productsModel.postProduct(name, amount);
  return product;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};

export default {
  postProduct,
  getAllProducts,
};