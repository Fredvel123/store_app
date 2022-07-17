import { DataTypes } from 'sequelize';
import sequelize from '../../../database/db.connection.js';

const userModel = sequelize.define(
	'users',
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			autoIncrement: true,
		},
		full_name: {
			type: DataTypes.TEXT, // 65 characters
		},
		phone: {
			type: DataTypes.TEXT,
		},
		email: {
			type: DataTypes.TEXT,
		},
		password: {
			type: DataTypes.TEXT,
		},
		key_email: {
			type: DataTypes.TEXT, // 12 characters
		},
		email_confirmed: {
			type: DataTypes.BOOLEAN,
		},
		role: {
			type: DataTypes.TEXT, // 10 charactrs
		},
		gender: {
			type: DataTypes.BOOLEAN,
		},
		profession: {
			type: DataTypes.TEXT,
		},
	},
	{
		timestamps: false,
	}
);

export default userModel;
