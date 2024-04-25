const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    url: { type: String, required: true },
    blurhash: { type: String, required: true },
    category: { type: String, required: true },
});

const Image = mongoose.model("image", imageSchema)

module.exports = { Image }