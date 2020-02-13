import BillModel from '../models/Bill.js';
import UserModel from "../models/User.js"
import ProductModel from "../models/Product.js"

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
    },

    async findOne(req,res,next){
        const bill = await BillModel.findOne({_id: req.params.billId});
        if(!bill)
            return next();
        return res.status(200).json(bill);
    },

    async findAll(req,res,next){
        const user = await UserModel.findById(req.params.userId);
        const bills = await BillModel.find({creator: user});
        if(bills.isEmpty)
            return next();
        return res.status(200).json(bills);
    }
}
