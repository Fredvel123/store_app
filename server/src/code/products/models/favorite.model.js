import { DataTypes } from 'sequelize';
import sequelize from '../../../database/db.connection.js';

const favoriteModel = sequelize.define(
	'favorite_products',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		product_id: {
			type: DataTypes.INTEGER,
		},
		author: {
			type: DataTypes.INTEGER,
		},
	},
	{
		timestamps: false,
	}
);

export default favoriteModel;
