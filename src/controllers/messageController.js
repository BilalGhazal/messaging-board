const crypto = require("crypto")
const messages = require("../models/messages")

const showMessages = (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages: messages})
}

const showForm = (req, res) => {
    res.render("new-message", {title: "Mini Messageboard"})
}

const saveMessage = (req, res) => {
    const {user, text} = req.body

    messages.push({
        id: crypto.randomUUID(),
        text: text,
        user: user,
        added: new Date()
    })

    console.log("Form has been submitted")

    res.redirect("/")
}


const showSingleMessage = (req, res) => {
    const id = req.params.id
    const message = messages.find(message => message.id === id)

    if (!message) {
        return res.status(404).send("Message not found")
    }

    res.render("single-message", {title: "Mini Messageboard", message: message})
}

module.exports = {showMessages, showForm, saveMessage, showSingleMessage}