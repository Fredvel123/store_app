import UsersDB from '../models/user.model.js';

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
