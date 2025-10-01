const BlogModel = require("../Models/Blog");

const addblog=async(req, res)=>{
    try{
        const {title,author,content,img}=req.body;
        const blog=await BlogModel.findOne({title});
        if(blog)
        {
            return res.status(409)
            .json({message:"Blog exist with given title",success:false});
        }
        const blogModel=new BlogModel({title,author,content,img});
        await blogModel.save();
        res.status(201)
        .json({message:"Blog Added Successfully ",success:true})

    }catch(err){
        res.status(500)
        .json({message:"Internal Server Error",err,success:false});
    }
}

module.exports={addblog};