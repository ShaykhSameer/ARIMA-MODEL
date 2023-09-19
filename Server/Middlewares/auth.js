const express = require("express");
const jwt = require("jsonwebtoken");
const config = process.env;
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.send({ message: "Token is missing" });
  } else {
    jwt.verify(token, config.SECRET_TOKEN, (err, decoded) => {
      if (err) {
        res.send(err);
      } 
        if (decoded.role == "admin"){
            next();
        } else {
          res.send({ message: "not admin" });
        }
    });
  }
};
module.exports=verifyToken;
