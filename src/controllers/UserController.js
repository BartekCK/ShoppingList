import UserModel from '../models/User.js';

export default {
    async create(req,res){
        const user = await UserModel({
            username: req.body.username,
            password: req.body.password,
            role: 'USER'
        }).save();

        return res.status(201).json(user);
    },
    async findOne(req,res,next){
        const user = await UserModel.findOne({_id: req.params.userId});
        if(!user)
            return next();
        return res.status(200).json(user);
    },

    async findAll(req,res,next){
        const users = await UserModel.find();
        if(users.isEmpty)
            return next();
        return res.status(200).json(users);

    },
    async update(req,res,next){
        const user = await UserModel.updateOne(
            {
                _id:req.params.userId
            },
            {
                $set:
                {
                password: req.body.password
                }
            }
        );
        if(!user)
            return next();

        return res.status(201).json(user);
    },
    async delete(req,res,next){
        const user = await UserModel.deleteOne({_id:req.params.userId});
        if(!user)
            return next();

        return res.status(200).json(user);
    }
}
