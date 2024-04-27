const router = require("express").Router()
const { Image } = require('../models/image')

router.get("/", async (req, res) => {
    try {
        const allImages = await Image.find({})
        res.send({ status: "ok", data: allImages })
    } catch (error) {
        console.error('Error fetching Images:', error);
        res.status(400).json({ error: 'Internal server error' });
    }
})

module.exports = router