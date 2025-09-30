const {required}=require ('joi');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:string,
        required:true
    },
    role:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    }
});

const UserModel=mongoose.Model('users',UserSchema);

module.exports=UserModel;