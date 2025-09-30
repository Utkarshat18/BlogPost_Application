const mongoose=require('mongoose');
const mongourl=process.env.MONGO_CONNECT;

mongoose.connect(mongourl)
    .then(()=>{
        console.log("Connected to the database");
    })
    .catch(()=>{
        console.log("Error while connecting to the database");
    })