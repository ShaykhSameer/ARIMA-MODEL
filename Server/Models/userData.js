const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
   userName:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }, 
    role:{
type:String,
default:"user"
    },
    address:
    {
        type:String
        
    }, 
    country:
    {
        type:String
       
    }, 
    city:
    {
        type:String
       
    }
    
    
   // please read about enum and how to use it
}
)
const user= new mongoose.model("user",userSchema);
module.exports=user;