const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://imersao5:goals@emunah.7fd8c.mongodb.net/imersao5?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successfully made, on base [imersao5.goals]")
}).catch((err) => {
    console.log("Error: connection failed when trying to connect to the base [imersao5.goals] " + err)
})

app.get('/goals', async (req, res) => {
    return res.json({
        message: 'Aprendendo a desenvolver APIs com NodeJS'
    })
})

app.listen(3000, () => {
    console.log("Server running on address: http://localhost:3000")
})