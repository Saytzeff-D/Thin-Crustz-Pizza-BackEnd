const mongoose = require('mongoose')
let historySchema = mongoose.Schema({
    userName: String,
    email: String,
    mobile: String,
    location: String,
    menu: String,
    priceTag: String,
    date: String
})