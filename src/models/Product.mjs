import mongoose from "mongoose";
import newExpirationDate  from "../utilies/expirationDate.mjs";

const Product = mongoose.Schema({
    title:{
        type: String,
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
