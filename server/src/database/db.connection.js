import { Sequelize } from 'sequelize';
// env var
import { PASSWORD, USERNAME, DATABASE, HOST } from '../configs/var.env.js';

const sequelize = new Sequelize({
	username: USERNAME,
	database: DATABASE,
	password: PASSWORD,
	host: HOST,
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
