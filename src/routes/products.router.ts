import { Router } from 'express';
import { postProduct, getAllProducts } from '../controllers/products.controller';
import validateProduct from '../middlewares/products.middleware';

const productsRouter = Router();

productsRouter.get('/', getAllProducts);

productsRouter.post('/', validateProduct, postProduct);

export default productsRouter;