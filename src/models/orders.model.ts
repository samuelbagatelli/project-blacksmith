import { RowDataPacket } from 'mysql2';
import connection from './connection';

import { IOrder } from '../interfaces';

const getAllOrders = async (): Promise<IOrder[]> => {
  const query = `
    SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
    FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS P
    ON P.orderId = O.id
    GROUP BY O.id;
  `;

  const [rows] = await connection
    .execute<IOrder[] & RowDataPacket[]>(query);
  return rows;
};

export default {
  getAllOrders,
};