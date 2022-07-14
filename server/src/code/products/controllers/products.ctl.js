// data from database
import ProductsDB from '../models/products.models.js';
import UsersDB from '../../users/models/user.model.js';
// compress images';
import sharp from 'sharp';
// cloudinary
import cloudinary from 'cloudinary';
cloudinary.config({
	cloud_name: CLOUD_NAME,
	api_key: CLOUD_KEY,
	api_secret: CLOUD_SECRET_KEY,
});
// variables enviroments
import {
	CLOUD_KEY,
	CLOUD_NAME,
	CLOUD_SECRET_KEY,
} from '../../../configs/var.env.js';
// path
import { __dirname } from '../middlewares/product.images.js';
import path from 'path';
// fs
import fs from 'fs-extra';

// get all products
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
	const { price, title, description } = req.body;
	const user = await UsersDB.findOne({ where: { id } });

	if (user.rool === 'admin') {
		if (req.file.size < 2100000) {
			const imageUploaded = await cloudinary.v2.uploader.upload(
				req.file.path
			);
			try {
				const productCreated = await ProductsDB.create({
					title,
					description,
					price,
					pic: imageUploaded.secure_url,
					pic_id: imageUploaded.public_id,
					author: user.id,
				});
				res.json({ productCreated: true, data: productCreated });
				// original image
				fs.remove(req.file.path, (err) => {
					if (err) res.send(err);
					console.log(`original Image removed: ${req.file.path}`);
				});
			} catch (err) {
				res.send(err);
			}
		} else {
			const pathImageCompressed = path.join(
				__dirname,
				`../compressed/${Date.now() + req.file.originalname}`
			);
			sharp(req.file.path)
				.resize()
				.jpeg({
					quality: 90,
					// chromaSubsampling: '4:4:4',
				})
				.toFile(pathImageCompressed, async (err, info) => {
					if (err) {
						res.send(err);
					} else {
						const imageUploaded =
							await cloudinary.v2.uploader.upload(
								pathImageCompressed
							);
						try {
							const productCreated = await ProductsDB.create({
								title,
								description,
								price,
								pic: imageUploaded.secure_url,
								pic_id: imageUploaded.public_id,
								author: user.id,
							});
							res.json({
								productCreated: true,
								data: productCreated,
							});
							// image compressed
							fs.remove(pathImageCompressed, (err) => {
								if (err) res.send(err);
								console.log(
									`image compressed removed: ${pathImageCompressed}`
								);
							});
							// original image
							fs.remove(req.file.path, (err) => {
								if (err) res.send(err);
								console.log(
									`original image removed: ${req.file.path} `
								);
							});
						} catch (err) {
							res.send(err);
						}
					}
				});
		}
	} else {
		res.json({
			productCreated: false,
			message:
				"You can't create products, only admins can create products",
		});
	}
};
