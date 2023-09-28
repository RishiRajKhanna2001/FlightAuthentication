const express=require('express');
const app=express();

const bodyParser=require('body-parser')

const {PORT}=require('./config/server-config')

const apiRoutes=require('./routes/index')

const prepareAndStartServer = () => {

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));
    
   app.use('/api',apiRoutes);
     
   app.listen(PORT,async ()=>{

    console.log(`Server Started on port :${PORT}`);
   })
}

prepareAndStartServer();
