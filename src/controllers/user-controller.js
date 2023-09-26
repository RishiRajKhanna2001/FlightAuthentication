const { use } = require('../routes');
const UserService=require('../services/user-service');

const userService=new UserService();

const createUser=async (req,res)=>{
    try {
        const user=await userService.create({
        email:req.body.email,
        password:req.body.password
        });
    return res.status(200).json({
        success:true,
        message:"successfully created user",
        error:{},
        data:user
    })
    } catch (error) {
        return res.status(200).json({
            data:[],
            message:"error in creating user",
            error:error
        })
    }
    
}

module.exports={
    createUser
}