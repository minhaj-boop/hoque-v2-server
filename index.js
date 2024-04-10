require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

//database connection
connection();

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log("Server is listening at " + PORT))

app.get("/", (req, res) => {
    res.json({ message: "server is running" })
})

require("./models/imageDetails")
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


