import UsersDB from '../models/user.model.js';
import { keyRandom } from '../helpers/key.random.js';
import { ADMIN1, JWT_KEY } from '../../../configs/var.env.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmailToConfirmEmail } from '../helpers/nodemailer.js';

// Sign Up
export const createNewUser = async (req, res) => {
	const { password, email, full_name } = req.body;
	const userExists = await UsersDB.findOne({ where: { email } });
	if (!userExists) {
		if (email.length >= 1) {
			if (full_name.length >= 5 && full_name.length <= 65) {
				if (password.length >= 5 && password.length <= 25) {
					const passwordHashed = await bcrypt.hash(password, 10);
					if (email === ADMIN1) {
						try {
							await UsersDB.create({
								email,
								password: passwordHashed,
								full_name,
								email_confirmed: true,
								key_email: keyRandom(12), // random string
								rool: 'admin',
							});
							res.json({
								isCreated: true,
								message: `your user was created, now you need to confirm your email.`,
							});
						} catch (err) {
							res.send(err);
						}
					} else {
						try {
							const user = await UsersDB.create({
								email,
								password: passwordHashed,
								full_name,
								key_email: keyRandom(12), // random string
								rool: 'user',
							});
							sendEmailToConfirmEmail(user.email, user.key_email);
							res.json({
								isCreated: true,
								message: `your user was created, now you need to confirm your email. Please go to your email and click the link below`,
							});
						} catch (err) {
							res.send(err);
						}
					}
				} else {
					res.json({
						isCreated: false,
						message:
							'your password must be greater than 4 and less than 26 characters',
					});
				}
			} else {
				res.json({
					isCreated: false,
					message:
						'you name must be greater than 4 and less than 66 characters',
				});
			}
		} else {
			res.json({
				isCreated: false,
				message: 'please add an email',
			});
		}
	} else {
		res.json({
			isCreated: false,
			message: `email: ${userExists.email}, is already used`,
		});
	}
};

// Sign in
export const registerUsers = async (req, res) => {
	const { password, email } = req.body;
	const user = await UsersDB.findOne({ where: { email } });
	if (user) {
		const matchPassword = await bcrypt.compare(password, user.password);
		if (matchPassword) {
			if (user.email_confirmed) {
				const token = jwt.sign({ id: user.id }, JWT_KEY, {
					expiresIn: 60 * 60 * 24 * 14,
				});
				res.json({
					auth: true,
					token,
				});
			} else {
				res.json({
					auth: false,
					message: 'You need to confirm your email to Sign In',
				});
			}
		} else {
			res.json({
				auth: false,
				message: 'your password is not correct',
			});
		}
	} else {
		res.json({
			auth: false,
			message: `your email, ${email} is not register`,
		});
	}
};
