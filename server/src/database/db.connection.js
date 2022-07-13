import { Sequelize } from 'sequelize';
// env var
import { PASSWORd, USERNAME, DATABASE } from '../configs/var.env.js';

const sequelize = new Sequelize({
	username: USERNAME,
	database: DATABASE,
	password: PASSWORd,
	// username: 'postgres',
	// database: 'store_app',
	// password: 'freddy',
	host: 'localhost',
	dialect: 'postgres',
	logging: false,
});

const testDatabase = async () => {
	try {
		await sequelize.authenticate();
		console.log('Database connected successfully');
	} catch (err) {
		console.log(err);
	}
};
testDatabase();

export default sequelize;
