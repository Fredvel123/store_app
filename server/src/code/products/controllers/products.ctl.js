import ProductsDB from '../models/products.models.js';
import UsersDB from '../../users/models/user.model.js';
// compress images';
import sharp from 'sharp';

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
		if (req.file.size < 2100000) {
			res.send(req.file);
		} else {
			sharp(req.file.path)
				.resize()
				.jpeg({
					quality: 90,
					// chromaSubsampling: '4:4:4',
				})
				.toFile(
					`./src/code/products/compressed/${
						Date.now() + req.file.originalname
					}`,
					(err, info) => {
						if (err) {
							res.send(err);
						} else {
							res.send(info);
						}
					}
				);
		}
	} else {
		res.json({
			productCreated: false,
			message:
				"You can't create products, only admins can create products",
		});
	}
};
