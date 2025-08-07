
const authMiddleware = (req,res,next)=>{
    const { token } = req.headers.authorization;

    
    next();
}


module.exports = { authMiddleware};