const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/Goals')
const Goal = mongoose.model('Goal')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors())
    next()
})

mongoose.connect('mongodb+srv://imersao5:goals@emunah.7fd8c.mongodb.net/imersao5?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successfully made, on base [imersao5.goals]")
}).catch((err) => {
    console.log("Error: connection failed when trying to connect to the base [imersao5.goals] " + err)
})

app.get('/goals', async (req, res) => {
    await Goal.find({}).then((goals) => {
        return res.json({
            error: false,
            goals
        })
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: 'Data not found!'
        })
    })

})

app.post('/goals', async (req, res) => {
    await sleep(300)

    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
    }

    await Goal.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: 'Error persisting data, please try again later.'
        })
    })

    return res.json({
        error: false,
        message: 'Data successfully saved!'
    })
})

app.listen(3333, () => {
    console.log("Server running on address: http://localhost:3333")
})