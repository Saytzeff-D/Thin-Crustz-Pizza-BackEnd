const mongoose = require('mongoose')
let menuSchema = mongoose.Schema({
    menu: String,
    menuDesc:  String,
    priceTag: String,
    imageUrl: String
})

let menuModel = mongoose.model('menus', menuSchema)
module.exports = menuModel