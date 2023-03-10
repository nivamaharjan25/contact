const router = require('express').Router();

const {insert,read,del,update} = require('../controller/crud');

router.post('/insert',insert);
router.post('/read',read);
router.post('/del',del);
router.post('/update',update);

module.exports = router;