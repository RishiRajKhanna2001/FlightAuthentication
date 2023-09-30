const validateUserAuth=(req,res,next)=>{
   if(!req.body.email || !req.body.password)
   {
    return res.status(400).json({
        succees:false,
        data:{},
        message:'Something went wrong with the request',
        err:'Email or password missing'
    })
   }
    next();
}

const validateAdminRequest=(req,res,next)=>{
    if(!req.body.id)
    {
        return res.status(400).json({
            succees:false,
            data:{},
            err:"User id not given",
            message:"Something went wrong"
        })
    }
    next();
}

module.exports={
    validateUserAuth,
    validateAdminRequest
}





