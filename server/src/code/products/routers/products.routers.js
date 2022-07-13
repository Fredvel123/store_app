import { Router } from 'express';
const router = Router();
// controllers
import { getAllProducts } from '../controllers/products.ctl.js';

router.get('/all', getAllProducts);

export default router;
