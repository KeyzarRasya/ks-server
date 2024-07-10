const express = require('express')
const {handleBeli} = require('../controller/form')

const router = express.Router();

router.post('/beli', handleBeli);

module.exports = router;