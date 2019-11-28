import express from 'express';
import ProductController from '../controllers/ProductController.mjs'

export const productRoute = express.Router();

//POST /products
productRoute.post('/',ProductController.create);

//GET /products/productId
productRoute.get('/:productId',ProductController.findOne);

//GET /products
productRoute.get('/',ProductController.findAll);

//PUT /products/productId
productRoute.put('/:productId',ProductController.update);

//DELETE /products/productId
productRoute.delete('/:productId',ProductController.delete);