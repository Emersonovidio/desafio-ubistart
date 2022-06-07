require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = 'meusegredo'
const configJwt = { 
    expiresIn: '120m',
    algorithm: 'HS256'
};

const validToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || token.length === 0) return res.status(401)
      .json({ message: 'Token not found' });
    try {
      jwt.verify(token, SECRET);
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
   };
  
   module.exports = { validToken };