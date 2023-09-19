const user = require('../Models/userData')
async function allUsers(req,res)
{
    try{
    const allUsers = await user.find({role:'user'})
    return res.send({message:"ok from admin",allUsers:allUsers});
    }
    catch{
        console.error("error while fetching users")
    }
}
module.exports={allUsers};