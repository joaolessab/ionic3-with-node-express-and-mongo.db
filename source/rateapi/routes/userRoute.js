const express = require('express');
const router = express.Router();

//Defining which Controller this route is going to use
const UserCtrl = require('../controllers/userCtrl');

//Defining final URL and its function from the Controller setted
router.post('/signup/user', UserCtrl.createUser);

module.exports = router;