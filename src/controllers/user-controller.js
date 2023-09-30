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

const isAuthenticated=async (req,res)=>{
    try {
        const token= req.headers['x-access-token']; 
        const result=await userService.isAuthenticated(token);
        return res.status(200).json({
            success:true,
            message:"user is authentic",
            error:{},
            data:result
        }) 
    } catch (error) {
        return res.status(200).json({
            data:[],
            message:"error in  authentication",
            error:error
        })
    }
}

const signIn=async (req,res)=>{
    try {
        const user=await userService.signIn(
        req.body.email,
        req.body.password
        );
    return res.status(200).json({
        data:user,
        success:true,
        message:"successfully signIn of user",
        error:{}
    })
    } catch (error) {
        return res.status(200).json({
            data:[],
            message:"error in signIn of user",
            error:error
        })
    }    
}

const isAdmin=async (req,res)=>{
    try {
        const response=await userService.isAdmin(req.body.id)
    return res.status(200).json({
        data:response,
        success:true,
        message:"successful in finding role of user",
        error:{}
    })
    } catch (error) {
        return res.status(200).json({
            data:[],
            message:"error in finding role of user",
            error:error
        })
    }    
}

module.exports={
    createUser,
    signIn,
    isAuthenticated,
    isAdmin
}