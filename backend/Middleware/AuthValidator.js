const joi=require('joi');

const registerValidation=(req,res,next)=>{
    const schema=joi.object({
        name:joi.string().min(2).max(30).required(),
        role:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().min(4).required()
    });
    const {error}=schema.validate(req.body);
    
    if(error)
    {
        return res.status(400)
        .json({message:"Bad Request", error:details[0].message});
    }
    next();
}

module.exports={registerValidation};