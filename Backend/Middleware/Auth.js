const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(401).json({msg:'No token provided'});
        }
        try{
            const decoded = jwt.verify(auth,process.env.JWT_SCERT);
            req.user = decoded;
            next();
        }catch (err){
            return res.status(401).json(
                {msg:'jwt token is wrong or expired'});
        }
}

 module.exports = ensureAuthenticated;