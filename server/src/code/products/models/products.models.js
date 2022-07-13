import sequelize from '../../../database/db.connection.js';
import { DataTypes } from 'sequelize';

const productsModel = sequelize.define(
	'products',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.TEXT,
		},
		description: {
			type: DataTypes.TEXT,
		},
		price: {
			type: DataTypes.INTEGER,
		},
		pic: {
			type: DataTypes.TEXT,
		},
		pic_id: {
			type: DataTypes.TEXT,
		},
		author: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

export default productsModel;
