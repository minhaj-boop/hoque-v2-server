const router = require("express").Router()
const { Image } = require("../models/image")

router.post("/", async (req, res) => {
    try {
        await new Image(req.body).save()
        res.status(201).send({ message: "Image uploaded successfully" })
    } catch (error) {
        req.status(400).send({ message: "Internal seerver error!" })
    }
})

module.exports = router