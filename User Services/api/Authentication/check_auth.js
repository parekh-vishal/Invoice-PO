const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1] || req.body.token;
        console.log("token",token);
        const decode = jwt.verify(token,process.env.JWT_KEY);
        req.userData = decode;
        next();
    }
    catch(error){
        return res.status(401).json({
            message : 'Authentication Failed'
        });
    }
}