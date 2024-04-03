const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")

const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.json({ message: "server is running" })
})

mongoose.connect("mongodb+srv://hoqueconstruction:thisishoque@cluster0.ez1dzko.mongodb.net/hoque?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("cennected to db");
        app.listen(PORT, console.log("Server is listening at " + PORT))
    }).catch((err) => {
        console.log(err);
    })

require("./imageDetails")
const Images = mongoose.model("ImageDetails")

app.post("/upload-image", async (req, res) => {
    const { base64 } = req.body;
    try {
        Images.create({ image: base64 })
        res.send({ Status: "ok" })
    } catch (error) {
        res.send({ Status: "error", data: "not connected" })
    }
})

