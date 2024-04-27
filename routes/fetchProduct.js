const router = require("express").Router()
const { Image } = require('../models/image')
const { ObjectId } = require('mongodb');

router.get("/", async (req, res) => {

    try {
        const product = await Image.findOne({ _id: ObjectId(req.params.id) })
        res.send({ status: "ok", data: product })
    } catch (error) {
        console.error('Error fetching Images:', error);
        res.status(400).json({ error: error });
    }
})

module.exports = router