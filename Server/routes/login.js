const express=require("express");
const route=express.Router();
const {loginValidation}=require("../Controllers/login");
route.post('/',loginValidation);
module.exports=route;