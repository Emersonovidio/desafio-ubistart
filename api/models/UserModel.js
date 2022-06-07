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

  const searchById = async (id) => {
    const [task] = await connection
    .execute(
      'SELECT * FROM TasksList.tasks WHERE id = ?', [id]);
  
    return task;
  };

  const newTask = async (email, descricao, prazo, data) => {
    const [task] = await connection
    .execute(
      'INSERT INTO TasksList.tasks (email, descricao, prazo, data) VALUES (?, ?, ?, ?)',
    [email, descricao, prazo, data]);
    
    return {
      id: task.insertId,
      email,
      descricao,
      prazo,
      data,
   };
};

const allTasks = async () => {
  const [task] = await connection
  .execute(
    'SELECT * FROM TasksList.tasks');
  return task;
};

const deleteTask = async (id) => {
  await connection
  .execute(
    'DELETE FROM TasksList.tasks WHERE id = ?',
    [id],
  );
};

const addUpdateTask = async (id, descricao, prazo) => {
  const [task] = await connection
  .execute(
    'UPDATE TasksList.tasks WHERE id = ?',
    [id],
  );
  return { 
    id: task.insertId,
    descricao,
    prazo };
};


module.exports = { 
  create,
  searchByEmail, 
  newTask,
  allTasks,
  searchById,
  deleteTask,
  addUpdateTask, 
};
