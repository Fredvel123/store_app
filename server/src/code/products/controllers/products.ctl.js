import ProductsDB from '../models/products.models.js';
import UsersDB from '../../users/models/user.model.js';

export const getAllProducts = async (req, res) => {
	const products = await ProductsDB.findAll();
	if (products.length < 1) {
		res.json({
			message: 'No products added yet',
		});
	} else {
		res.json(products);
	}
};

export const createNewProduct = async (req, res) => {
	const id = req.id;
	const { price, title, description, pic } = req.body;
	const user = await UsersDB.findOne({ where: { id } });

	if (user.rool === 'admin') {
		res.send('product created');
	} else {
		res.json({
			productCreated: false,
			message:
				"You can't create products, only admins can create products",
		});
	}
};
