const router = require("express").Router()
const { Image } = require('../models/image')
const { ObjectId } = require('mongodb');

router.get("/", async (req, res) => {
    // try {
    //     const product = await Image.findOne({ "_id": ObjectId(req.params.id) });
    //     console.log(product);
    //     if (!product) {

    //         return res.status(404).send()
    //     }
    //     res.send(product)
    // } catch (error) {
    //     console.error('Error fetching product:', error);
    //     res.status(500).json({ error: 'Internal server error' });
    // }
    // console.log({
    //     requestParams: req.params,
    //     requestQuery: req.query
    // });
    // const customerID = req.params.id
    // console.log(customerID);
    try {
        const product = await Image.findOne({ "_id": ObjectId(req.params.id) })
        res.send({ status: "ok", data: product })
    } catch (error) {
        console.error('Error fetching Images:', error);
        res.status(400).json({ error: 'Internal server error' });
    }
})

module.exports = router