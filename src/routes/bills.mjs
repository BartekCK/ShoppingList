import express from 'express';
import BillController from '../controllers/BillController.mjs'
import {catchAsync} from '../middlewares/errors.mjs'

export const billRoute = express.Router();

//POST /bills/userId
billRoute.post('/:userId',catchAsync(BillController.create));

//GET /bills/billId
billRoute.get('/:billId',catchAsync(BillController.findOne));

//GET /bills/users/userId
billRoute.get('/users/:userId',catchAsync(BillController.findAll));
