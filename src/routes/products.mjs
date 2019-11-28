import express from 'express';
import ProductController from '../controllers/ProductController.mjs'

export const productRoute = express.Router();

//GET /products/productId
productRoute.get('/:productId',ProductController.findOne);