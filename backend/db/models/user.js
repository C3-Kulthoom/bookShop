const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    country:{type:String},
    phoneNumber:{type:Number},
    BirthDate:{type:Number},
    email:{type:String , unique: true },
    password:{type:String},
    favorite :[{type:mongoose.Schema.Types.ObjectId,ref:"Favorite"}],
    cart :[{type:mongoose.Schema.Types.ObjectId,ref:"Cart"}]

})

userSchema.pre('save', async function(){
    this.email = this.email.toLowerCase()
    this.password = await bcrypt.hash(this.password,10) 
    })

    
module.exports=mongoose.model("User",userSchema)







