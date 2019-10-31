const express = require('express')
const { messages } = require('../services/messages')
const rootRoute = express.Router()

rootRoute.get('', (req, res)=>{
    messages.getMessages().then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(400).json(err)
    })

})




 module.exports = rootRoute