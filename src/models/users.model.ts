import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces';

export const createUser = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;

  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;

  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
    
  return {
    id: insertId,
    ...user,
  };
};

export const findOneUser = async (usernameOrPass: IUser): Promise<IUser> => {
  const userOrPassKey = Object.keys(usernameOrPass);

  const userOrPassValue = Object.values(usernameOrPass);

  const query = `SELECT * FROM Trybesmith.Users WHERE ${userOrPassKey[0]} = ?`;

  const [[result]] = await connection.execute<IUser[] & RowDataPacket[]>(query, userOrPassValue);

  return result;
};