const express=require("express");
const verifyToken = require("../Middlewares/auth");
const { newUsers} = require("../Controllers/newUser");
const route=express.Router();
route.post("/",verifyToken,newUsers);
module.exports=route;