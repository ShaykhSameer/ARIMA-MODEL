const express=require("express");
const user=require("../Models/userData")
const bcrypyt=require("bcryptjs");
const jwt=require("jsonwebtoken");
async function loginValidation(req,res)
{
const {name,password}=req.body; //getting user input
const regUser= await user.findOne({userName:name});
//console.log(regUser);
if(regUser)
{
    const validPass=await bcrypyt.compare(req.body.password,regUser.password);
    if(validPass)
    {
        const token=jwt.sign(
            {user_id:regUser._id,userName:name,role:regUser.role},process.env.SECRET_TOKEN,
            {
                expiresIn:"1hr"
            }
        );
        res.cookie('token',token)
        res.send({message: "Login successfull",token,role:regUser.role})
    }
    else{
        res.send({message:"Password is incorrect!"})
    }
}
else{
    res.send({message:"Incorrect password or username!"})
}

//                         // const token=jwt.sign({_id:regUser._id},process.env.SECRET_TOKEN);
//                         // res.header("auth_token",token).send(token);
//
}
module.exports={loginValidation,};