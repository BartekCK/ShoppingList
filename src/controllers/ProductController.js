import ProductModel from "../models/Product.js"


export default {
    async findOne(req,res,next){
        
        const product = await ProductModel.findOne({_id: req.params.productId});
        if(!product)
            return next();

        return res.status(200).json(product);
        
    },
    async create(req,res){
       
        const product = await new ProductModel({
            title: req.body.title,
            price: req.body.price
        }).save();
        res.status(201).json({data:product, message: 'Product was added'});
        
    },
    async findAll(req,res,next){
        
        const products = await ProductModel.find();
        if(!products)
            return next();
        return res.status(200).json(products);
    
    },
    async update(req,res,next){
       
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
        if(!product)
            return next();

        return res.status(201).json(product);
        
    },
    async delete(req,res){
        
        const product = await ProductModel.deleteOne({_id:req.params.productId});
        if(!product)
            return next();

        return res.status(200).json(product);
        
    },
    async existInDb(searchingProduct){
        const product = await ProductModel.find({title: searchingProduct.title},
            {$exists: true});
        if(product)
            return true;
        else 
            return false;
    }

};
