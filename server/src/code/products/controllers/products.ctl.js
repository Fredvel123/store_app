// data from database
import ProductsDB from '../models/products.models.js';
import UsersDB from '../../users/models/user.model.js';
import FavoriteDB from '../models/favorite.model.js';
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
import {__dirname} from '../middlewares/product.images.js';
import path from 'path';
// fs
import fs from 'fs-extra';

// get all products
export const getAllProducts = async (req, res) => {
  const products = await ProductsDB.findAll();
  if (!products.length < 1) {
    res.json(products);
    return;
  }
  res.json({
    message: 'No products added yet',
  });
};

// craete products refactored
export const createNewProduct = async (req, res) => {
  const id = req.id;
  const {price, title, description} = req.body;
  const user = await UsersDB.findOne({where: {id}});
  if (user.role !== 'admin') {
    res.json({
      productCreated: false,
      message:
        "You can't create products, only admins can create products",
    });
    return;
  }
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
      res.json({productCreated: true, data: productCreated});
      // original image
      fs.remove(req.file.path, (err) => {
        if (err) res.send(err);
        console.log(`original Image removed: ${req.file.path}`);
      });
    } catch (err) {
      res.send(err);
    }
    return;
  }
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
        return;
      }
      const imageUploaded = await cloudinary.v2.uploader.upload(
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
          console.log(`original image removed: ${req.file.path} `);
        });
      } catch (err) {
        res.send(err);
      }
    });
};



// dropProduct refactored
export const dropProduct = async (req, res) => {
  // products
  const {id_product} = req.params;
  const product = await ProductsDB.findOne({where: {id: id_product}});
  // users
  const id = req.id; // id users
  const user = await UsersDB.findOne({where: {id}});
  if (user.role !== 'admin') {
    res.json({
      message: 'Only admins can remove products',
    });
    return;
  }
  if (!product) {
    res.json({
      dropped: false,
      meessage: `Product with id: ${id_product}, doesn't exist`,
    });
    return;
  }
  try {
    await cloudinary.v2.uploader.destroy(product.pic_id);
    console.log('image removed from cloudinary');
    try {
      await ProductsDB.destroy({where: {id: id_product}});
      res.json({
        dropped: true,
        product_id: id_product,
      });
    } catch (err) {
      res.send(err);
    }
  } catch (err) {
    res.send(err);
  }
};

// code to added products to favorites
export const addFavoriteProducts = async (req, res) => {
  const {id_product} = req.params;
  const id = req.id;
  const product = await ProductsDB.findOne({where: {id: id_product}});
  const user = await UsersDB.findOne({where: {id}});
  const favoriteAdded = await FavoriteDB.findOne({
    where: {author: id, product_id: id_product},
  });
  if (product) {
    if (!favoriteAdded) {
      const newFavoriteProduct = await FavoriteDB.create({
        product_id: product.id,
        author: user.id,
      });
      res.json({
        favoriteCreated: true,
        data: newFavoriteProduct,
      });
    } else {
      res.json({
        message: `You already added product with id: ${id_product} before`,
      });
    }
  } else {
    res.json({message: `product with id: ${id_product} doesn't exists`});
  }
};

export const removeFavoriteProduct = async (req, res) => {
  const id = req.id;
  const {id_product} = req.params;
  const productsByUser = await FavoriteDB.findOne({
    where: {author: id, product_id: id_product},
  });
  if (productsByUser) {
    try {
      await FavoriteDB.destroy({
        where: {author: id, product_id: id_product},
      });
      res.json({
        favoriteRemoved: true,
        message: `Product with id: ${id_product} removed`,
      });
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json({
      message: `product with id: ${id_product}, doesn't exists`,
    });
  }
};

export const getAllFavoriteProducts = async (req, res) => {
  const id = req.id;
  const favoriteProducts = await FavoriteDB.findAll({
    where: {author: id},
  });
  if (favoriteProducts < 1) {
    res.json({
      message: `User with id: ${id}, doesn't have any favorite product`,
    });
  } else {
    let products = [];
    for (let i = 0; i < favoriteProducts.length; i++) {
      const element = favoriteProducts[i];
      const items = await ProductsDB.findOne({
        where: {id: element.dataValues.product_id},
      });
      products.push(items);
    }
    res.json(products);
  }
};
