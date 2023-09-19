const express=require("express");
const verifyToken = require("../Middlewares/auth");
const { allUsers } = require("../Controllers/allUsers");
const route=express.Router();
route.get("/",verifyToken,allUsers);
module.exports=route;