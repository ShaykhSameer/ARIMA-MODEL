const User=require('../Models/userData')
const notifier = require('node-notifier');
const bcrypyt=require("bcryptjs");
const jwt=require("jsonwebtoken");
async function newUsers(req,res)
{
    const jsonData=req.body;
const { userName, password,address,role,country,city } = jsonData;
    console.log(req.body);
    //checking if username already existed
    const salt= await bcrypyt.genSalt(10);
    const hashedPass= await bcrypyt.hash(req.body.password,salt);
                const newUser = new User({
                    userName,
                    password:hashedPass,
                    address,
                    role,
                    country,
                    city,
                });
                newUser.save().then((res)=>
                        {
                            notifier.notify({
                                title:"Successfully Registered!",
                                message:"User has been successfully Registered:)",
                                sound:true,
                                wait:true
                            })
                    console.log("data saved in db")
                        })
                    }
                   

//     } catch (err) {
//         res.status(500).send(err);
//     }
// }
module.exports = {newUsers};