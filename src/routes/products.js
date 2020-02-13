import express from 'express';
import ProductController from '../controllers/ProductController.js'
import {catchAsync} from '../middlewares/errors.js'

export const productRoute = express.Router();

//POST /products
productRoute.post('/',catchAsync(ProductController.create));

//GET /products/productId
productRoute.get('/:productId',catchAsync(ProductController.findOne));

//GET /products
productRoute.get('/',catchAsync(ProductController.findAll));

//PUT /products/productId
productRoute.put('/:productId',catchAsync(ProductController.update));

//DELETE /products/productId
productRoute.delete('/:productId',catchAsync(ProductController.delete));
