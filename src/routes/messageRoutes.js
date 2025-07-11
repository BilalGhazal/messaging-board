const express = require("express")
const router = express.Router()

const messageController = require("../controllers/messageController")


router.get("/", messageController.showMessages)

router.get("/new-message", messageController.showForm)

router.post("/new-message", messageController.saveMessage)

router.get("/messages/:id", messageController.showSingleMessage)

module.exports = router