import UsersDB from '../models/user.model.js';
import ProductsDB from '../../products/models/products.models.js';
import FavoriteDB from '../../products/models/favorite.model.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res) => {
	try {
		const users = await UsersDB.findAll();
		if (users.length < 1) {
			res.json({
				message: 'No users added yet',
			});
		} else {
			res.json(users);
		}
	} catch (err) {
		res.send(err);
	}
};

export const confirmEmail = async (req, res) => {
	const { key } = req.params;
	const match = await UsersDB.findOne({ where: { key_email: key } });
	if (match) {
		try {
			match.email_confirmed = true;
			await match.save();
			res.send('your email was confirmed successfully');
		} catch (err) {
			res.send(err);
		}
	}
};

export const editUserInfo = async (req, res) => {
	const id = req.id;
	const { profession, gender, phone, full_name } = req.body;
	const user = await UsersDB.findOne({ where: { id } });
	try {
		user.phone = phone;
		user.full_name = full_name;
		user.profession = profession;
		user.gender = gender;
		await user.save();
		res.send({
			edited: true,
			newData: user,
		});
	} catch (err) {
		res.send(err);
	}
};

export const removeUser = async (req, res) => {
	const id = req.id;
	const user = await UsersDB.findOne({ where: { id } });
	const { password } = req.body;
	const passwordMatch = await bcrypt.compare(password, user.password);
	if (passwordMatch) {
		try {
			await FavoriteDB.destroy({
				where: { author: id },
			});
			await ProductsDB.destroy({
				where: { author: id },
			});
			await UsersDB.destroy({ where: { id } });
			res.send({ userRemoved: true });
		} catch (err) {
			res.send(err);
		}
	} else {
		res.json({
			userRemoved: false,
			message: 'your password is nor correct',
		});
	}
};

export const getUserRole = async (req, res) => {
	const id = req.id;
	const user = await UsersDB.findOne({ where: { id } });
	if (user.role !== 'admin') {
		res.json({ admin: false });
		return;
	}
	res.json({ admin: true });
};
