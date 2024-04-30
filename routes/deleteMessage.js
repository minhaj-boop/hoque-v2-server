const router = require("express").Router()
const { Message } = require('../models/message')

router.get("/", async (req, res) => {
    const { message } = req.body
    try {
        Message.deleteOne(
            { _id: message }, function (err, res) {
                console.log(err);
            }
        )
        res.send({ status: "ok", data: "Deleted" })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router