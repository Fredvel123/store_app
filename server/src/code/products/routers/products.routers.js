import { Router } from 'express';
const router = Router();
// controllers
import {
	createNewProduct,
	getAllProducts,
} from '../controllers/products.ctl.js';

import { verifyJwt } from '../../users/middlewares/jwt.verify.js';

router.get('/all', getAllProducts);
router.post('/create', verifyJwt, createNewProduct);

export default router;
