const connection = require('../middlewares/connection');

const allTasks = async () => {
    const [task] = await connection
    .execute(
      'SELECT * FROM TasksList.tasks ORDER BY prazo LIMIT 10');
      
    return { 
      id: task.insertId,
      email,
      descricao,
      prazo };
  };

  const tasksAtrasadas = async () => {
    const [task] = await connection
    .execute(
      'SELECT * FROM TasksList.tasks as t WHERE prazo < current_timestamp() ORDER BY prazo LIMIT 10');
      
    return { 
      id: task.insertId,
      email,
      descricao,
      prazo };
  };
  

module.exports = { 
  allTasks,
  tasksAtrasadas,
};