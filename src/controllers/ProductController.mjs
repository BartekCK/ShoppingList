import ProductModel from "../models/Product.mjs"

export default {
    async findOne(req,res){
        try{
            const product = await ProductModel.findOne({_id: req.params.productId});
            return res.status(200).json(product);
        }catch(err){
            return err;
        }
    }
}