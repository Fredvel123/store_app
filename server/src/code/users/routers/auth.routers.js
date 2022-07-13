import { Router } from 'express';
const router = Router();
// controllers
import { createNewUser, registerUsers } from '../controllers/auth.ctl.js';

router.post('/signup', createNewUser);
router.post('/signin', registerUsers);

export default router;
