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
