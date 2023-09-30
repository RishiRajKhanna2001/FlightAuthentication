const express=require('express');

const UserController=require('../../controllers/user-controller')
const { authRequestValidater } = require('../../middlewares/index');

const router=express.Router();

router.post('/signup',authRequestValidater.validateUserAuth,UserController.createUser);
router.post('/signin',authRequestValidater.validateUserAuth,UserController.signIn);
router.get('/isAuthenticated',UserController.isAuthenticated);
router.get('/isAdmin',authRequestValidater.validateAdminRequest,UserController.isAdmin);

module.exports=router
