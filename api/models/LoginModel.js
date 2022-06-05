const connection = require('../middlewares/connection');

const searchByEmail = async (email) => {
    const [user] = await connection
    .execute('SELECT * FROM TodoList.Users WHERE email = ?', [email]);
  
    return user;
  };

  module.exports = { searchByEmail };
