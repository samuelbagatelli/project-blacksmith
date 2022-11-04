import { Router } from 'express';
import { postProduct } from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/', postProduct);

export default productsRouter;