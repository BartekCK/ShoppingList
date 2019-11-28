import express from 'express';
import {database} from '../config/database.mjs';
import {productRoute} from '../routes/products.mjs'
import {userRoute} from '../routes/users.mjs'
import {billRoute} from '../routes/bills.mjs'

export const app = express();

database();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/products',productRoute);
app.use('/users',userRoute);
app.use('/bills',billRoute);