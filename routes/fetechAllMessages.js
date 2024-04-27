const router = require('express').Router()
const { Message } = require('../models/message')

router.get('/', async (req, res) => {
    try {
        const allMessages = await Message.find({})
        res.send({ status: "ok", data: allMessages })
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(400).json({ error: 'Internal server error' });
    }
})

module.exports = router