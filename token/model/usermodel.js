import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

const useModel = mongoose.models.user || mongoose.model("User",userShema)

export default useModel;
