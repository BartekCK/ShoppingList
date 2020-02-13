import mongoose from "mongoose";
import {Product} from './Product.js'

export const Bill = mongoose.Schema({

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }],
    date: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

export default mongoose.model('Bills',Bill);
