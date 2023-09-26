const express=require('express');
const app=express();

const bodyParser=require('body-parser')

const {PORT}=require('./config/server-config')

const UserRepository=require('./repository/user-repository')
const apiRoutes=require('./routes/index')

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

  
    
    app.use('/api',apiRoutes);
     
   app.listen(PORT,async ()=>{

    const userRepo=new UserRepository();
    const user =await userRepo.getById(6);
    console.log(user);

    console.log(`Server Started on port :${PORT}`);
   })
}

prepareAndStartServer();

