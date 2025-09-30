const UserModel = require("../Models/User");
bcrypt=require('bcrypt');
jwt=require('jsonwebtoken');

const register=async(req, res)=>{
    try{
        const {name,role,email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(user)
        {
            return res.status(409)
            .json({message:"User Already exists",success:false});
        }

        const userModel=new UserModel({name,role,email,password});
        userModel.password=await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201)
        .json({message:"User Registered Successfully",success:true});
    }catch(err){
        res.status(500)
        .json({message:"Internal Server Error",err,success:false});
    }
}

module.exports={register};