const mongoose=require('mongoose');
const {required}=require('joi');
const Schema=mongoose.Schema;

const BlogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
});

const BlogModel=mongoose.model('blogs',BlogSchema);
module.exports=BlogModel;