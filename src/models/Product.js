import mongoose from "mongoose";
import newExpirationDate  from "../utilies/expirationDate.js";

export const Product = mongoose.Schema({
    title:{
        type: String,
        unique: true,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    expirationDate:{
        type: Date,
        default: newExpirationDate()
    }
});

export default mongoose.model('Products',Product);
