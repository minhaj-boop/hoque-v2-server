const router = require("express").Router()
const { Image } = require('../models/image')

router.get("/:id", async (req, res) => {

    try {
        const product = await Image.findOne({ _id: req.params.id })
        res.send({ status: "ok", data: product })
    } catch (error) {
        // console.error('Error fetching Images:', error);
        res.status(400).json({ error: "Internal server error" });
    }
})

module.exports = router