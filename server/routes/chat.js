const express = require('express');
const router = express.Router()
const { initChat } = require('../controllers/chat');
const { eventReady } = require('../controllers/chat');

router.post('/init', initChat)
router.post('/event-ready', eventReady)

module.exports = router;