const express = require('express');
require('dotenv').config();
const bodyParser =  require('body-parser');
const app = express();
app.use(express.json());

const validation = require('./middlewares/validateUser');
const tokenValidation = require('./middlewares/validateToken');

const { registerUser, login, addTask, getAllTasks
 } = require('./controllers/userController');
const { loginAdmin } =  require('./controllers/adminController');

app.use(bodyParser.json());

app.use('/register', validation.email, validation.senha, registerUser);
app.use('/login', tokenValidation.validToken, login);
app.use('/user', validation.email, validation.senha, addTask);
app.use('/user', getAllTasks);
app.use('/admin', tokenValidation.validToken, loginAdmin);

const PORT = process.env.PORT || 8000;
app.get('/', (_req, res) => {
  res.send(" - Wellcome To Tasklists API - ");
});

app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});