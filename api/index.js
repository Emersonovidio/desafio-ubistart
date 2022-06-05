const express = require('express');
require('dotenv').config();
const bodyParser =  require('body-parser');
const app = express();
app.use(express.json());

const validation = require('./middlewares/validateUser');
const tokenValidation = require('./middlewares/validateToken');
const { registerUser } = require('./controllers/userController');
const { login } = require('./controllers/loginController');

app.use(bodyParser.json());

app.use('/register', validation.email, validation.senha, registerUser);
app.use('/login', tokenValidation.validToken, login);
// app.use('/user', () => {});

const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
  res.send(" - Wellcome To Tasklists API - ");
});

app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});