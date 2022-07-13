import { Router } from 'express';
const router = Router();
// controllers
import { getAllUsers } from '../controllers/users.ctl.js';

router.get('/all', getAllUsers);

export default router;
