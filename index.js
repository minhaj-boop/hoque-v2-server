require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const imageRoutes = require('./routes/images')
const fetchImagesRoutes = require('./routes/fetchImages')

//database connection
connection();

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/upload-image', imageRoutes)
app.use('/api/all-images', fetchImagesRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log("Server is listening at " + PORT))

app.get("/", (req, res) => {
    res.json({ message: "server is running" })
})


