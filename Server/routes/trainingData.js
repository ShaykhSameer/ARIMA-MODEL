const express=require("express");
const route=express.Router();
const {training}=require("../Controllers/training");
route.get('/',training);
module.exports=route;