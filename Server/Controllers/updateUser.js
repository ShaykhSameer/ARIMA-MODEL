const user=require('../Models/userData')
async function updateUser(req,res)
{
    const getUser=req.params.id;
    const updateduser=await user.findByIdAndUpdate({_id:getUser},{userName:req.body.username})
    if(updateduser)
    {
        res.send({message:"successfully updated user"})
    }
    else{
        res.send({message:"error while updating user"})
    }
}
module.exports={updateUser}

