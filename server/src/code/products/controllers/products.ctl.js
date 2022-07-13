import ProductsDB from '../models/products.models.js';
// import UsersDB from '../../users/models/user.model.js';

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
