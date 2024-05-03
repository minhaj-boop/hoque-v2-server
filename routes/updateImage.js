// 

const router = require("express").Router();
const { Image } = require('../models/image');

router.put("/:id", async (req, res) => {
    const imageId = req.params.id;
    // console.log(imageId); 

    try {
        const updatedImage = await Image.findOneAndUpdate({ _id: imageId }, req.body, { new: true });
        if (!updatedImage) {
            return res.status(404).json({ status: "error", message: "Image not found" });
        }
        res.status(200).json({ status: "ok", data: "Image updates successfully" });
    } catch (error) {
        console.error("Error updating Image:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

module.exports = router;
