const express=require('express');

const bodyParser=require('body-parser')

const {PORT}=require('./config/db-config')

function startServer(params) {
    const app=express();
   
   app.listen(PORT,()=>{
    console.log("Server Started");
   })
}

startServer();


