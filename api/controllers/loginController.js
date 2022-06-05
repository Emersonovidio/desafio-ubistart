const SECRET = 'meusegredo'
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const token = req.headers.authorization;
  if(!token) return res.status(401).json({ message: 'Sorry, Token not found'});

  try {
  jwt.verify( token, SECRET );
  return res.status(201).json({message: 'sucessfully authenticad'});
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  };
  
  module.exports = { login };