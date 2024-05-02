// 

const router = require("express").Router();
const { Image } = require('../models/image');

router.delete("/:id", async (req, res) => {
    const imageId = req.params.id;
    // console.log(imageId); 

    try {
        const deletedImage = await Image.findByIdAndDelete(imageId);
        if (!deletedImage) {
            return res.status(404).json({ status: "error", message: "Image not found" });
        }
        res.status(200).json({ status: "ok", data: "Image deleted successfully" });
    } catch (error) {
        console.error("Error deleting Image:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

module.exports = router;
