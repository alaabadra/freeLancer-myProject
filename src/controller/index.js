const router = require('express').Router();
const signup = require('./signup.js');
const login = require('./login.js')
const signupVerification = require('./middleware/signupVerification.js');
const {isFoundForSignup,isFoundForLogin} = require('./middleware/isFound.js');
const hashPassword = require('./middleware/hashPassword.js');
const addUserForSignUp = require('./middleware/addUserForSignup.js')
// router.post('/signup', signup.get,isFoundForSignup,hashPassword,addUserForSignUp);
router.post('/login',login.get,isFoundForLogin);
module.exports = router;
