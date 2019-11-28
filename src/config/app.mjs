import express from 'express';
import {database} from '../config/database.mjs';
import {productRoute} from '../routes/products.mjs'

export const app = express();
database();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/products',productRoute);