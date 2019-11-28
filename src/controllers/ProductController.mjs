import ProductModel from "../models/Product.mjs"


export default {
    async findOne(req,res){
        try{
            const product = await ProductModel.findOne({_id: req.params.productId});
            return res.status(200).json(product);
        }catch(err){
            return err;
        }
    },
    async create(req,res){
        try{
            const product = await new ProductModel({
                title: req.body.title,
                price: req.body.price
            }).save();
         res.status(201).json({data:product, message: 'Product was added'});
        }catch(err){
            return res.json(err);
        }
    },
    async findAll(req,res){
        try{
            const products = await ProductModel.find();
            return res.status(200).json(products);
        }catch(err){
            return err;
        }
    },
    async update(req,res){
        try{
            const product = await ProductModel.updateOne(
                {
                    _id:req.params.productId
                },
                {
                    $set:
                    {
                    price: req.body.price
                    }
                }
            );
            return res.status(201).json(product);
        }catch(err){
            return res.json(err);
        }
    },
    async delete(req,res){
        try{
            const product = await ProductModel.deleteOne({_id:req.params.productId});
            return res.status(200).json(product);
        }catch(err){
            return res.json(err);
        }
    }

};