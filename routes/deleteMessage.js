// 

const router = require("express").Router();
const { Message } = require('../models/message');

router.delete("/:id", async (req, res) => {
    const messageId = req.params.id;
    // console.log(messageId); // Ensure you get the correct message ID

    try {
        const deletedMessage = await Message.findByIdAndDelete(messageId);
        if (!deletedMessage) {
            return res.status(404).json({ status: "error", message: "Message not found" });
        }
        res.status(200).json({ status: "ok", data: "Message deleted successfully" });
    } catch (error) {
        console.error("Error deleting message:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

module.exports = router;
