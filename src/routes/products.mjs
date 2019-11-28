import express from 'express';
import ProductController from '../controllers/ProductController.mjs'
import {catchAsync} from '../middlewares/errors.mjs'

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