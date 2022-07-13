import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../../../configs/var.env.js';

export const verifyJwt = (req, res, next) => {
	const token = req.headers['token'];
	if (token) {
		const access = jwt.verify(token, JWT_KEY, (err, payload) => {
			if (err) {
				res.json({
					auth: false,
					message: 'your token is not valid',
				});
			} else {
				req.id = payload.id;
				next();
			}
		});
	} else {
		res.json({
			auth: false,
			message: "You don't have a access token",
		});
	}
};
