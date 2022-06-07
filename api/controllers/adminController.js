const SECRET = 'meusegredo'
const admindataacess = require('../utils/dataAdmin');
const adminModel = require('../models/adminModel');

const registerAdmin = async (req, res) => {
  try {
    req.body = admindataacess;
 
  const token = jwt.sign({ email, senha }, SECRET, configJwt);
  return res.status(201).json(token);
  } catch (err){
  return res.status(500).json({ message: err.message });
}
};

const loginAdmin = async (req, res) => {
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

const getAll = async () => {
  try {
    const tasks = await adminModel.allTasks();
    res.status(201).json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const latedTasks = async () => {
  try {
    const tasks = await adminModel.tasksAtrasadas();
    res.status(201).json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
  
module.exports = { 
  registerAdmin,
  loginAdmin,
  getAll,
  latedTasks,
};
