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
const messageRoutes = require('./routes/messages')
const fetchMessagesRoutes = require('./routes/fetechAllMessages')
const fetchProduct = require('./routes/fetchProduct')
const deleteMessage = require('./routes/deleteMessage')

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
app.use('/api/message', messageRoutes)
app.use('/api/all-messages', fetchMessagesRoutes)
app.use('/api/single-product', fetchProduct)
app.use('/api/delete-message', deleteMessage)

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log("Server is listening at " + PORT))

// app.get("/", (req, res) => {
//     res.json({ message: "server is running" })
// })


