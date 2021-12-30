const mongoose = require('mongoose')

const connectionsSchema = new mongoose.Schema({
    competitor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Competitors"
    },
    businessOpportunity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BusinessOpportunity"
    },
    challenge: {
        type: String,
        required: true
    },
    strategy: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
// using the schema to make a collection in our DB
const Connections = mongoose.model('Connections', connectionsSchema)
module.exports = Connections
