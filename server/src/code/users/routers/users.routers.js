import { Router } from 'express';
const router = Router();
// controllers
import {
	confirmEmail,
	editUserInfo,
	getAllUsers,
	removeUser,
} from '../controllers/users.ctl.js';
import { verifyJwt } from '../middlewares/jwt.verify.js';

router.get('/all', getAllUsers);
router.get('/confirmemail/:key', confirmEmail);
router.patch('/edit', verifyJwt, editUserInfo);
router.delete('/remove', verifyJwt, removeUser);

export default router;
