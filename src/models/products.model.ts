import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

import { IProduct } from '../interfaces';

const postProduct = async (name: string, amount: string): Promise<IProduct> => {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products 
      (name, amount) VALUES (?, ?)`, [name, amount]);

  const result: unknown = {
    id: insertId,
    name,
    amount,
  };

  return result as IProduct;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const [rows] = await connection
    .execute<IProduct[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  return rows;
};

export default {
  postProduct,
  getAllProducts,
};