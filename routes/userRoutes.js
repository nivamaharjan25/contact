const router = require('express').Router();

const {signUp, login} = require('../controller/user');
// const {insert} = require('../controller/insert');

router.post('/signup',signUp);
router.post('/login',login);
// router.post('/insert',insert);

module.exports = router;
