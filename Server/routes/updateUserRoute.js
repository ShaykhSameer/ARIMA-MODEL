const verifyToken=require('../Middlewares/auth')
const {updateUser}=require('../Controllers/updateUser')
const express=require("express");
const route=express.Router();
route.put('/:id',verifyToken,updateUser);
module.exports=route;
