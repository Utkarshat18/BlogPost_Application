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

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(!user)
        {
            return res.status(409)
            .json({message:"user doesn't exist. Do the registration ", success:false});
        }
        const ispassword=await bcrypt.compare(password,user.password);
        if(!ispassword)
        {
            return res.status(403)
            .json({message:"Incorrect Password. check your details",success:false});
        }
        const token=jwt.sign({
            email:user.email,
            id:user._id},
            process.env.JWT_SECRET,{expiresIn:"1h"}
        );

        res.status(200)
        .json({message:"Login Successfully ", success:true, token,email,user:user.name,role:user.role});
    }catch(err){
        res.status(500)
        .json({message:"Internal Server Error",err,success:false});
    }
}

module.exports={register,login};