import express from 'express';
import {database} from './database.js';
import {productRoute} from '../routes/products.js'
import {userRoute} from '../routes/users.js'
import {billRoute} from '../routes/bills.js'
import {catchError} from '../middlewares/errors.js';

export const app = express();

database();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/products',productRoute);
app.use('/users',userRoute);
app.use('/bills',billRoute);

app.use(catchError);
