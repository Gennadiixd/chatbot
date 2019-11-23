const express = require('express');
const router = express.Router();
const { initChat, eventReady, sendMessage } = require('../controllers/chat');

router.post('/init', initChat);
router.post('/event-ready', eventReady);
router.post('/message', sendMessage);

module.exports = router;