import { IProduct } from '../interfaces';
import ProductsModel from '../models/products.model';

const postProduct = async (name: string, amount: string): Promise<IProduct> => {
  const product = await ProductsModel.postProduct(name, amount);
  return product;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await ProductsModel.getAllProducts();
  return products;
};

export default {
  postProduct,
  getAllProducts,
};