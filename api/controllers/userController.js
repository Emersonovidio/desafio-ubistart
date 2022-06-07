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
  
  const response = await service.createUser(req.body);
  const token = jwt.sign(({ email, senha }), SECRET, configJwt);
  return res.status(201).json(token);
  } catch (err){
  return res.status(500).json({ message: err.message });
}
};

const login = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Sorry, Token not found'});

  try {
  jwt.verify( token, SECRET );
  if(token) {
    return res.status(201).json({message: 'sucessfully authenticad'});
    // res.redirect('/user'); sugestao: redirecionar ate pagina Login
    // return;
  }
  } catch (err) {
    return res.status(500).json({ message: err.message });
 }
};
  

//CRIA NOVA TAREFA

const addTask = async (req, res) => {
  const { email, descricao, prazo, data } = req.body;
  try {
    const response = await service.AddTaskService({ email, descricao, prazo, data });
    return res.status(201).json(response);
} catch (err) {
    return res.status(500).json({ message: err.message });
}
};
//BUSCA TODAS TAREFAS

const getAllTasks = async (_req, res) => {
  try {
    const tasks = await service.getAllService();
    res.status(201).json(tasks);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  }
};

//FINALIZA TAREFA, BUSCA ID E REMOVE

 const doneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const findTask = await service.getIdService(id);
  
    if (!findTask) return res.status(404).json({ message: 'Task not found' });
    await taskModel.deleteTask(id);
    return res.status(201).json(...findTask);

  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
 };

//ATUALIZA TAREFA

const updateTask = async (req, res) => {
  const { id } = req.params;
  const {
    descricao,
    prazo,
    } = req.body;
  
  const findTask = await service.getIdService(id);
    if (!findTask) return res.status(404).json({ message: 'Task not found' });

    if(!descricao || !prazo) return res.status(422).json({ message: 'Required parameter' });
  const currentTask = await service.updateService(descricao, prazo);
    if (currentTask) return res.status(201).json(currentTask);

 };

module.exports = {
  registerUser,
  login,
  addTask,
  getAllTasks,
  doneTask,
  updateTask,
};
