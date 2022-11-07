import { Request, Response, NextFunction } from 'express';
import usersSchema from '../validations/users.schema';

const validateUsers = (req: Request, res: Response, next: NextFunction) => {
  const { error } = usersSchema.validate(req.body);

  if (error) {
    const statusCode = error.message.includes('must') ? 422 : 400;

    return res.status(statusCode).json({ message: error.message });
  }

  next();
};

export default validateUsers;