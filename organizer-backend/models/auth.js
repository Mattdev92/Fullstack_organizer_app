const mongoose = require('mongoose');
//Creating schema of Authorization
const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min: 6,
        max:255
    },
    email:{
        type:String,
        required:true,
        min: 6,
        max:30
    },
    password:{
        type:String,
        required:true,
        min: 6,
        max:1024
    },
    date:{
        type:Date,
        default: Date.now,
    }
})
module.exports=mongoose.model('User',authSchema);