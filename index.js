const express = require('express')
const app = express()
app.use(express.static(__dirname + '/build'))
const API_PORT = process.env
const port = process.env.PORT || API_PORT
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())
require('dotenv').config()
const appRouter = require('./routes/app.route')
app.use('/', appRouter)

const mongoose = require('mongoose')
const URI = 'mongodb+srv://Saytzeff-D:lolly15@cluster0.afjdjoq.mongodb.net/ecommerce?retryWrites=true&w=majority'
mongoose.connect(URI, (err)=>{
    if(err){
        console.log('Mongoose disconected due to network connectivity', err)
    }else{
        console.log('Mongoose connected successfully')
    }
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))