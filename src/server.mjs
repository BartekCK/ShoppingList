import {app} from './config/app.mjs'
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

app.listen(process.env.PORT,()=>{
    console.log(`Server started on ${process.env.PORT}`);
})