const cloudinary = require('cloudinary')
const historyModel = require('../models/history.model')
const menuModel = require('../models/menu.model')
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
const addMenu =(req, res)=>{
    let menu = req.body
    if (menu.menu == '' | menu.menuDesc == '' | menu.priceTag == '' | menu.imageUrl == '') {
        res.status(302).json({msg: 'All inputs are required'})
    } else {
        cloudinary.v2.uploader.upload(menu.imageUrl, (err, result)=>{
            if(err){
                res.status(302).json({msg: 'Unable to upload image'})
            }else{
                menu.imageUrl = result.secure_url
                const menuForm = new menuModel(menu)
                menuForm.save((err)=>{
                    if(err){
                        res.status(302).json({msg: 'Refuse to add menu'})
                    }else{
                        res.status(202).json({msg: 'Menu Added Successfully'})
                    }
                })
            }
        })        
    }
}
const viewMenu =(req, res)=>{
    menuModel.find((err, result)=>{
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
}
const checkOut =(req, res)=>{
    let myCheckOut = req.body
    myCheckOut.date = new Date().toLocaleTimeString()
    const checkoutForm = new historyModel(myCheckOut)
    checkoutForm.save((err)=>{
        if (err) {
            res.status(300).json({msg: 'Server Error'})
        } else {
            res.status(200).json({msg: 'CheckOut Added'})
        }
    })
}

const controller = {addMenu, viewMenu, checkOut}
module.exports = controller