const connection = require('../middlewares/connection');

const create = async (email, senha) => {
  const [user] = await connection
  .execute('INSERT INTO TasksList.Users (email, senha) VALUES (?, ?)',
  [email, senha]);
  
  return {
    id: user.insertId,
    email,
  };
  };

const searchByEmail = async (email) => {
  const [user] = await connection
    .execute('SELECT * FROM TasksList.Users WHERE email = ?', [email]);
  
    return user;
  };

  module.exports = { create, searchByEmail };
