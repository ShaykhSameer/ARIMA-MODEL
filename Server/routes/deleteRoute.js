const express=require("express");
const verifyToken = require("../Middlewares/auth");
const { deleteUser } = require("../Controllers/deleteUser");
const route=express.Router();
route.delete("/:userID",verifyToken,deleteUser);
module.exports=route;