import mongoose from "mongoose";
import {Product} from '../models/Product.mjs'
import {User} from '../models/User.mjs'

export const Bill = mongoose.Schema({
    user: User,
    product: [Product]
});

export default mongoose.model('Bills',Bill);