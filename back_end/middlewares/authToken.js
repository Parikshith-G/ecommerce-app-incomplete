const jwt=require('jsonwebtoken')


const authTokenforlogin=async(req,res,next)=>{

    next()
    return

    try{
        const token=req.cookies.access_token
        if(!token){
            return res.status(403).send("Error token doesnt exist token required for validation")
        }

        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.user=decode
            next()
        }
        catch(error){
            return res.status(401).send("Error invalid / modified token")
        }
        
    }
    catch(error){
        next(error)
    }
}

const isAdmin=async(req,res,next)=>{
    next()
    return;
    if(req.user && req.user.isAdmin){
        next()
    }
    else{
        return res.status(401).send("Error admin required")
    }
}
module.exports={authTokenforlogin,isAdmin};