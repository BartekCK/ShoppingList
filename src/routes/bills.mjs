import express from 'express';
import BillController from '../controllers/BillController.mjs'
import {catchAsync} from '../middlewares/errors.mjs'

export const billRoute = express.Router();

//POST /bills
billRoute.post('/:userId',catchAsync(BillController.create));

// //GET /bills/billId
// billRoute.get('/:billId',catchAsync(BillController.findOne));

// //GET /bills
// billRoute.get('/',catchAsync(BillController.findAll));

// //PUT /bills/billId
// billRoute.put('/:billId',catchAsync(BillController.update));

// //DELETE /bills/billId
// billRoute.delete('/:billId',catchAsync(BillController.delete));