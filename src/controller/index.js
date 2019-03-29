const router = require('express').Router();
const signup = require('./signup.js');
const signupVerification = require('./middleware/signupVerification.js');
const isFound = require('./middleware/isFound.js');
const hashPassword = require('./middleware/hashPassword.js');
const addUserForSignUp = require('./middleware/addUserForSignup.js')
router.get('/signup', signup.get,isFound,hashPassword,addUserForSignUp);

module.exports = router;
