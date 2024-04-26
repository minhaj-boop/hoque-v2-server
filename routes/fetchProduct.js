const router = require("express").Router()
const { Image } = require('../models/image')

router.get("/", async (req, res) => {
    try {
        const image = Image.findById({ _id: req.params.id })
        if (!image) {
            return res.status(404).send()
        }
        res.send(image)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router