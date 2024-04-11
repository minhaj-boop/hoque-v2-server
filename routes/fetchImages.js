const router = require("express").Router()
const { Image } = require('../models/image')

router.get("/", async (req, res) => {
    try {
        const allImages = await Image.find({})
        res.send({ status: "ok", data: allImages })
    } catch (error) {

    }
})

module.exports = router