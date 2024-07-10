const express = require('express');
const {makeAdmin, finishedOrder, unfinishedOrder, setFinish} = require('../controller/dashboard')

const router = express.Router();

router.post('/make/admin', makeAdmin);
router.get('/unfinish', unfinishedOrder);
router.get('/finish', finishedOrder);
router.post('/set/finish', setFinish);

module.exports = router;