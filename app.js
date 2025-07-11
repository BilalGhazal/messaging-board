const express = require("express")
const path = require("path")
const app = express()

app.set("views", path.join(__dirname, "src/views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

const messageRoutes = require("./src/routes/messageRoutes")
app.use("/", messageRoutes)

module.exports = app