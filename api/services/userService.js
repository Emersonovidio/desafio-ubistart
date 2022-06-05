const UserModel = require('../models/UserModel');


const createUser = async (email, senha) => {
  try {
   const response = await UserModel.create(email, senha);
   const { id, email } = response.data;
   return { id, email };
  } catch (err) {
    return { message: err.message };
  }
};

const searchByEmail = async (email) => {
  try {
  const user = await UserModel.searchByEmail(email);
  return user;
} catch (err) {
  return { message: err.message };
}
};

module.exports = { createUser, searchByEmail };