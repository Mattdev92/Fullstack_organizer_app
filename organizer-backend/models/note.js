//Importing mangoos
const mongoose = require('mongoose');

//Creating schema of DataBase
const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    noteDate:{
        type:Date,
        required:true,
        default:Date.now
    },
})
//Exporting databse schema
module.exports=mongoose.model('Notes',notesSchema);