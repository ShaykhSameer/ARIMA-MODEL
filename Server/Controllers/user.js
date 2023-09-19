const User=require("../Models/userData");
const notifier = require('node-notifier');
const bcrypyt=require("bcryptjs");
const jwt=require("jsonwebtoken");
async function dataSaving(req,res)
{
    const jsonData=req.body;
const { name, password } = jsonData;
    console.log(req.body);
    //checking if username already existed
       const existingUser= await User.findOne({ userName: req.body.name });
            if (existingUser) {
                notifier.notify({
                    title: 'User Already Registered',
                    message: 'Kindly Use Another Username!',
                   // icon: path.join(__dirname, 'icon.jpg'),
                    sound: true,
                    wait: true
                  })
                  //hashing the password
                console.log("user already registerd");
            } else{
            const salt= await bcrypyt.genSalt(10);
            const hashedPass= await bcrypyt.hash(req.body.password,salt);
                const newUser = new User({
                    userName: name,
                    password: hashedPass,
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
                   
}
//     } catch (err) {
//         res.status(500).send(err);
//     }
// }
module.exports = {dataSaving,};