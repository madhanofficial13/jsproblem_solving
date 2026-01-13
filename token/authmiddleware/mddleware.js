import jwt from "jsonwebtoken";

const authMiddleware = (req,res)=>{
    const authehead = req.header.authorization;
    
    const token = authehead.split(" ")[1];

    const decode = jwt.verify({token})
    req.body.userId = decode.id;
    next();
}

export default authMiddleware;