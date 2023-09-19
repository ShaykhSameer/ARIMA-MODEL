const express=require("express");
const verifyToken = require("../Middlewares/auth");
const { getUser } = require("../Controllers/getUser");
const route=express.Router();
route.get("/:id",verifyToken,getUser);
module.exports=route;