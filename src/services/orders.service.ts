import { IOrder } from '../interfaces';
import ordersModel from '../models/orders.model';

const getAllOrders = async (): Promise<IOrder[]> => {
  const products = await ordersModel.getAllOrders();
  return products;
};

export default {
  getAllOrders,
};