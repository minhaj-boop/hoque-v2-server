const router = require("express").Router()
const { Image } = require('../models/image')
const { ObjectId } = require('mongodb');

router.get("/", async (req, res) => {
    try {
        const product = await Image.findOne({ _id: ObjectId(req.params.id) });
        if (!product) {
            console.log("Nothing found")
            return res.status(404).send()
        }
        res.send(product)
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router