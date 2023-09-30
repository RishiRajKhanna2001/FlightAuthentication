const express=require('express');
const app=express();

const bodyParser=require('body-parser')

const {PORT}=require('./config/server-config')

const {User,role}=require('./models/index')

const apiRoutes=require('./routes/index')

const db=require('./models/index')

const prepareAndStartServer = () => {

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));
    
   app.use('/api',apiRoutes);
     
   app.listen(PORT,async ()=>{
      console.log(`Server Started on port :${PORT}`);

      // if(process.env.DB_SYNC)
      // {
      //     db.sequelize.sync({alter:true})
      // }
      // const u1=await User.findByPk(2);
      // const r1=await role.findByPk(1);
   
      // u1.addRole(r1);
      // const response=await r1.getUsers();
      // console.log(response);

   })
}

prepareAndStartServer();

