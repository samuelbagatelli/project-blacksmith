import { Request, Response, NextFunction } from 'express';
import productsSchema from '../validations/products.schema';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productsSchema.validate(req.body);

  if (error) {
    const statusCode = error.message.includes('must') ? 422 : 400;
    
    return res.status(statusCode).json({ message: error.message });
  }

  next();
};

export default validateProduct;