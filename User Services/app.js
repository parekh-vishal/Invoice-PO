const express=require("express");
const app=express();
const morgan =require('morgan');
const bodyParser=require("body-parser");
const mongoose = require("mongoose");
const app_adminRoute = require('../User Services/api/routes/app-admin')
mongoose.connect('mongodb://localhost:27017/POIDB',{
    useNewUrlParser: true, useUnifiedTopology: true
});
var db = mongoose.connection;
console.log(process.env.JWT_KEY);
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
     console.log("Connection succeeded.");
 });
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/app-admin',app_adminRoute);
app.use((req,res,next)=>{
    res.header("Acess-Control-Allow-Origin",'*');
    res.header('Access-Control-Allow-Heaaders','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Mehtods','PUT, POST, PATCH, DELET, GET');
        return res.status(200).json({});
    }
    next(); 
});
app.use((req,res,next)=>{
    const error=new Error("Not Found");
    error.status=404;
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message 
        }
    });
});
module.exports = app;