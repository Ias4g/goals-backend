const mongoose = require('mongoose')

const { Schema } = mongoose

const goal = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    Status: {
        type: String
    }
}, {
    timestamps: true
})

mongoose.model('Goal', goal)