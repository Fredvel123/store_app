import { Router } from 'express';
const router = Router();
// controllers
import {
	createNewProduct,
	dropProduct,
	getAllProducts,
} from '../controllers/products.ctl.js';
// middlewares
import { upload } from '../middlewares/product.images.js';
import { verifyJwt } from '../../users/middlewares/jwt.verify.js';

router.get('/all', getAllProducts);
router.post(
	'/create',
	verifyJwt,
	upload.single('product_pic'),
	createNewProduct
);
router.delete('/drop/:id_product', verifyJwt, dropProduct);

export default router;
