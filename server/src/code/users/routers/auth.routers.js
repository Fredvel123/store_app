import { Router } from 'express';
const router = Router();
// controllers
import { createNewUser } from '../controllers/auth.ctl.js';

router.post('/signup', createNewUser);

export default router;
