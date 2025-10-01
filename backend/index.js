const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();
require('./Models/db');
const AuthRouter=require('./Router/AuthRouter');
const BlogRouter=require('./Router/BlogRouter')

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    console.log("Server is working ");
    res.send("API is running on PORT "+PORT);
})

app.use(bodyParser.json());
app.use(cors());

app.use('/auth',AuthRouter);
app.use('/blog',BlogRouter);


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})