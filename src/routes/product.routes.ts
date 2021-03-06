import { Router } from 'express';
import ProductController from '../controllers/ProductController';
const ProductRouter = Router();

ProductRouter.get('/', ProductController.getAll);
ProductRouter.get('/:id', ProductController.getById);
ProductRouter.post('/', ProductController.save);
ProductRouter.delete('/:id', ProductController.delete);
ProductRouter.get('/name/:name', ProductController.getByName);

export default ProductRouter;
