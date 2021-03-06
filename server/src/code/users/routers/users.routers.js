import { Router } from 'express';
const router = Router();
// controllers
import {
	confirmEmail,
	editUserInfo,
	getAllUsers,
	getInfobyUser,
	getUserRole,
	removeUser,
} from '../controllers/users.ctl.js';
import { verifyJwt } from '../middlewares/jwt.verify.js';

router.get('/all', getAllUsers);
router.get('/confirmemail/:key', confirmEmail);
router.get('/role', verifyJwt, getUserRole);
router.get('/singleuser', verifyJwt, getInfobyUser);
router.patch('/edit', verifyJwt, editUserInfo);
router.delete('/remove', verifyJwt, removeUser);

export default router;
