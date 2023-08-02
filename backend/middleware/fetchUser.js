const jwt = require('jsonwebtoken');
const JWT_SECRET = 'CreatedByAadarsh';
const fetchUser = (req, res, next)=> {
    // Get user from the JWT Token
    const token = req.header('authToken');
    if(!token){
        res.status(401).send({error:"Use a valid token"});
    }
    try{
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
    }catch(error){
        res.status(401).send({error:"Use a valid token"});
    }

}

module.exports = fetchUser;