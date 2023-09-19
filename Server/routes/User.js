const express=require("express");
const route=express.Router();
const {dataSaving}=require("../Controllers/user");
route.post('/',dataSaving);
module.exports=route;