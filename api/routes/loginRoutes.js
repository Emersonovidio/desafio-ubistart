const router = require('express').Router();

const { login } = require('../controllers/loginController');

// const validate = require('../middlewares/ValidateLogin');

// router.post('/', validate.email, validate.password, login);
router.post('/', login);


module.exports = router; 