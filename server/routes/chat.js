const express = require('express');
const router = express.Router()
const { initChat } = require('../controllers/chat');

router.post('/init', initChat)

module.exports = router;