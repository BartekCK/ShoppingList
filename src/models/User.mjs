import mongoose from "mongoose";

export const User = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:[{
        type: String,
        required: true,
    }],
    
});

export default mongoose.model('Users',User);