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

const getAllService = async () => {
  try {
  const task = await UserModel.allTasks();
  return task;
} catch(err) {
  return { message: err.message };
}
};

const AddTaskService = async (email, descricao, prazo, data) => {
  try {
  const task = await UserModel.create(email, descricao, prazo, data);
  return task;
  } catch(err) {
    return { message: err.message };
 }
}; 

const getIdService = async (id) => {
  const [getByid] = await UserModel.searchById(id);
  if (getByid === undefined) return false;
  return getByid;
};

const updateService = async (id, descricao, prazo) => {
  try {  
  const currentTask = await models.updateProduct(id, descricao, prazo);

   if (currentTask) return res.status(201).json(currentTask);
  } catch(err) {
    return { message: err.message };
  }
}

module.exports = { 
  createUser,
  searchByEmail,
  getAllService,
  AddTaskService,
  getIdService,
  updateService,
};
