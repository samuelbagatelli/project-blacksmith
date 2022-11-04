import { Router } from 'express';
import { postProduct, getAllProducts } from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.get('/', getAllProducts);

productsRouter.post('/', postProduct);

export default productsRouter;