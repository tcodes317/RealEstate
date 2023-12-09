import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true, 
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})


let model = mongoose.model("file", userSchema);