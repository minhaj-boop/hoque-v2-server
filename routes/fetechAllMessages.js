const router = require('express').Router()
const { Message } = require('../models/message')

router.get('/', async (req, res) => {
    try {
        const allMessages = await Message.find({})
        res.send({ status: "ok", data: allMessages })
    } catch (error) {

    }
})

module.exports = router