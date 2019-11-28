import express from 'express';
import {database} from '../config/database.mjs'

export const app = express();
database();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());