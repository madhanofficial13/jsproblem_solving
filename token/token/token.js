import jwt from "jsonwebtoken"
import dot from "dotend";
dot.config()


const accesstoken = (userId)=>{
    return jwt.sign({userId},process.env.JWT,{expiresIn:"5min"})
}

const refereshToken = userId=>{
    return jwt.sign({userId},process.env.Jwt,{expiresIn:"7d"})
}

export {accesstoken,refereshToken}