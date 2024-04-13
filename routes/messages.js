const router = require("express").Router()
const { Message } = require("../models/message")

router.post("/", async (req, res) => {
    try {
        await new Message(req.body).save()
        res.status(201).send({ message: "Message sent successfully." })
    } catch (error) {
        res.status(400).send({ message: "Internal server error!" })
    }
})

module.exports = router