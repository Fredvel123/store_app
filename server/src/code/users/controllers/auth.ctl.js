import UsersDB from '../models/user.model.js';
import { keyRandom } from '../helpers/key.random.js';
import { ADMIN1, JWT_KEY } from '../../../configs/var.env.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmailToConfirmEmail } from '../helpers/nodemailer.js';

// Sign Up refactored
export const createNewUser = async (req, res) => {
	const { password, email, full_name } = req.body;
	const userExists = await UsersDB.findOne({ where: { email } });
	if (userExists) {
		res.json({
			isCreated: false,
			message: `email: ${userExists.email}, is already used, please enter another valid email`,
		});
	} else if (!email.length >= 1) {
		res.json({
			isCreated: false,
			message: 'please add an email',
		});
	} else if (!(full_name.length >= 5)) {
		res.json({
			isCreated: false,
			message: 'you name must be greater than 4 characters',
		});
	} else if (!(full_name.length <= 65)) {
		res.json({
			isCreated: false,
			message: 'you name must be less than 65 characters',
		});
	} else if (!(password.length >= 5)) {
		res.json({
			isCreated: false,
			message: 'your password must be greater than 4 characters',
		});
	} else if (!(password.length <= 25)) {
		res.json({
			isCreated: false,
			message: 'your password must be less than 26 characters',
		});
	} else if (email !== ADMIN1) {
		const passwordHashed = await bcrypt.hash(password, 10);
		try {
			const user = await UsersDB.create({
				email,
				password: passwordHashed,
				full_name,
				key_email: keyRandom(12), // random string
				role: 'client',
			});
			sendEmailToConfirmEmail(user.email, user.key_email);
			res.json({
				isCreated: true,
				message: `your user was created, now you need to confirm your email. Please go to your email and click the link below`,
			});
		} catch (err) {
			res.send(err);
		}
	} else {
		try {
			const passwordHashed = await bcrypt.hash(password, 10);
			await UsersDB.create({
				email,
				password: passwordHashed,
				full_name,
				email_confirmed: true,
				key_email: keyRandom(12), // random string
				role: 'admin',
			});
			res.json({
				isCreated: true,
				message: `your user was created`,
			});
		} catch (err) {
			res.send(err);
		}
	}
};

// Sign in refactored
export const registerUsers = async (req, res) => {
	const { password, email } = req.body;
	const user = await UsersDB.findOne({ where: { email } });
	if (!user) {
		res.json({
			auth: false,
			message: `your email, ${email} is not register`,
		});
		return;
	}
	const matchPassword = await bcrypt.compare(password, user.password);
	if (!matchPassword) {
		res.json({
			auth: false,
			message: 'your password is not correct',
		});
		return;
	}
	if (!user.email_confirmed) {
		res.json({
			auth: false,
			message: 'You need to confirm your email to Sign In',
		});
		return;
	}
	const token = jwt.sign({ id: user.id }, JWT_KEY, {
		expiresIn: 60 * 60 * 24 * 14,
	});
	res.json({
		auth: true,
		token,
	});
};
