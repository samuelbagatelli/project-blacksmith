import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { IProduct } from '../interfaces';

export const postProduct = async (name: string, amount: string): Promise<IProduct> => {
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

export const anything = 'any';