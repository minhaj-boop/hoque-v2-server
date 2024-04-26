const router = require("express").Router()
const { Image } = require('../models/image')

router.get("/", async (req, res) => {
    try {
        const product = await Image.findOne({ _id: new ObjectId(req.params.id) });
        if (!product) {
            return res.status(404).send()
        }
        res.send(product)
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router