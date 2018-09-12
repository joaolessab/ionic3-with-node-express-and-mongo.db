const express = require('express');
const router = express.Router();
//Defining Controller
const UserCtrl = require('../controllers/userCtrl');

router.post('/signup/user', UserCtrl.createUser);

module.exports = router;