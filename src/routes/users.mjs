import express from 'express';
import { catchAsync } from '../middlewares/errors.mjs';
import UserController from '../controllers/UserController.mjs';

export const userRoute = express.Router();

//POST /users
userRoute.post('/',catchAsync(UserController.create));

//GET /users/userId
userRoute.get('/:userId',catchAsync(UserController.findOne));

//GET /users
userRoute.get('/',catchAsync(UserController.findAll));

//PUT /users/userId
userRoute.put('/:userId',catchAsync(UserController.update));

//DELETE /users/userId
userRoute.delete('/:userId',catchAsync(UserController.delete));