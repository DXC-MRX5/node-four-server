const jwt=require("jsonwebtoken");
const secretKey="dxc-mrx5";

const authorizer=(req,res,next)=>{
    const receivedToken=req.headers["authorization"]
    if(receivedToken==undefined){
        res.status(403).send({message:"You are not a valid user to get data from this api"})
    }
    const token=receivedToken.split(" ")[1];
    try {
        const validate=jwt.verify(token, secretKey);
        console.log(validate);
    } catch (error) {
        return res.status(400).send({message:"invalid Token "+ error.message})
    }
    next();
}
module.exports=authorizer;