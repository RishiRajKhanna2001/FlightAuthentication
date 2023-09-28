const validateUserSignup=(req,res,next)=>{
   if(!req.body.email || !req.body.password)
   {
    return res.status(400).json({
        succees:false,
        data:{},
        message:'Something went wrong',
        err:'Email or password missing'
    })
   }
    next();
}

module.exports={
    validateUserSignup
}