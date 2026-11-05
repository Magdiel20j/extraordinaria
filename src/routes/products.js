import express from 'express';
import productsController from '../controller/productsController.js';

const router = express.Router();

router.route('/')
.get(productsController.getProducts)
.post(productsController.insertProducts);

router.route('/:id')

.get(productsController.getProductsById)
.put(productsController.updateProducts)
.delete(productsController.deleteProducts);

export default router;