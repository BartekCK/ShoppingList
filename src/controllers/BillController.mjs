import BillModel from '../models/Bill.mjs';
import UserModel from "../models/User.mjs"
import ProductModel from "../models/Product.mjs"

export default {
    async create(req,res){

        const fetchProducts = [];
        req.body.products.forEach(async element => {
            const product = await ProductModel.findOne({title: element});
            fetchProducts.push(product);
        });

        const user = await UserModel.findById(req.params.userId);
        
        const bill = await new BillModel({
            products : fetchProducts,
            creator: user
        }).save();

        return res.status(201).json(bill);
    }

  
}