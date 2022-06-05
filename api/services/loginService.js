const LoginModel = require('../models/LoginModel');

const searchByEmail = async (email) => {
  try {
    const user = await LoginModel.searchByEmail(email);
    return user;
  } catch (err) {
    return { message: err.message };
  }
  };
  
  module.exports = { searchByEmail };