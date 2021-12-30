const mongoose = require('mongoose')

const competitorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
// using the schema to make a collection in our DB
const Competitors = mongoose.model('Competitors', competitorsSchema)
module.exports = Competitors
