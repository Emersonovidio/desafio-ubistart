const service = require('../services/userService');
const SECRET = 'meusegredo'
const jwt = require('jsonwebtoken');

const configJwt = { 
    expiresIn: '120m',
    algorithm: 'HS256'
};

const registerUser = async (req, res) => {
  try {
  const { email, senha } = req.body;
  
  const response = await service.createUser({ email,senha });
  const token = jwt.sign({ email, senha }, SECRET, configJwt);
  return res.status(201).json(token);
  } catch (err){
  return res.status(500).json({ message: err.message });
}
};

module.exports = {
 registerUser
};
