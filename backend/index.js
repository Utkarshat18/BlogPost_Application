const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');

require('dotenv').config();

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    console.log("Request Received ");
    res.send("API is running on PORT "+PORT);
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})