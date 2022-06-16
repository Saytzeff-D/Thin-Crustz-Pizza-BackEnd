const mongoose = require('mongoose')
let historySchema = mongoose.Schema({
    userName: String,
    referenceNumber: String,
    email: String,
    mobile: String,
    location: String,
    menu: String,
    priceTag: String,
    date: String
})
let historyModel = mongoose.model('history', historySchema)
module.exports = historyModel