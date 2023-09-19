const users=require('../Models/userData');
async function getUser(req,res)
{
    //console.log(req.body._id);
   const user=req.params.id;
    const getuser=await users.findById({_id:user})
    if(getuser)
    {
        res.send({message:"user successfuly found",getuser:getuser})
    }
    else{
        res.send({message:"error finding user"})
    }
}
module.exports={getUser}