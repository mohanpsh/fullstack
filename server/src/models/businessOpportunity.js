const mongoose = require('mongoose')

const businessOpportunitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
// using the schema to make a collection in our DB
const BusinessOpportunity = mongoose.model('BusinessOpportunity', businessOpportunitySchema)
module.exports = BusinessOpportunity
