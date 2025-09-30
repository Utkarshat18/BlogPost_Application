const joi=require('joi');

const registerValidation=(req,res,next)=>{
    const schema=joi.object({
        name:joi.string().min(2).max(30).required(),
        role:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().min(8).required()
    });
    const {error}=schema.validate(req.body);
    
    if(error)
    {
        return res.status(400)
        .json({message:"Bad Request", error:details[0].message});
    }
    next();
}

const loginValidation=(req,res,next)=>{
    const schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().required()
    });
    const {error}=schema.validate(req.body);
    if(error)
    {
        return res.status(400)
        .json({message:"Bad Request",error:details[0].message});
    }
    next();
}

module.exports={registerValidation,loginValidation};