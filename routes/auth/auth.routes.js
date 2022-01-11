const express = require('express');
const router = express.Router();
const registerUser = require('../../controllers/auth/register');
const loggedinUser = require('../../controllers/auth/login');
const confirmEmail = require('../../controllers/auth/confirmEmail')




router.post('/register', registerUser);

router.post('/login', loggedinUser);

router.post('/confirm-user', confirmEmail);


module.exports = router;