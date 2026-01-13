import useModel from "../model/usermodel";
import bccypt from "bcrypt"
import { accesstoken,refereshToken } from "../token/token";

const login = async (req,res)=>{
    const {email,password} = req.body;
    const user = await useModel.findOne({email});
    if(!user){
        return res.json({message:"user not valid"})
    }
    const pass = bccypt.compare(password,user.password);
    if(!pass){
        return res.json({message:"not valid"})
    }

    const accessToken = accesstoken(user._id.toString());
    const refereshTok = refereshToken(user._id.toString());

    user.accessToken = refereshTok;
     await  user.save();

     return res.json({accessToken})

}

export default login;