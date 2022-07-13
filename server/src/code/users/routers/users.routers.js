import { Router } from 'express';
const router = Router();
// controllers
import { confirmEmail, getAllUsers } from '../controllers/users.ctl.js';

router.get('/all', getAllUsers);
router.get('/confirmemail/:key', confirmEmail);

export default router;
