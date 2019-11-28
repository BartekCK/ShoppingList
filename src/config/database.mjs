import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

export const database = ()=>{
    mongoose.connect(process.env.DB_CONNECTION,
        {useNewUrlParser: true, useUnifiedTopology: true},
        ()=> console.log('Successfull connection with db'));
}; 
