const express = require('express');
const { messages } = require('../services/messages');
const { userServices } = require('../services/users');
const rootRoute = express.Router()

rootRoute.get('', (req, res)=>{
    messages.getMessages().then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(400).json(err)
    })

})

rootRoute.post('user', (req, res)=>{
    const {username} = req.body
    const {avatar} = req.body 
    console.log('here', username, avatar)

    userServices.createUser(username, avatar).then(()=>{
        res.status(200).json('usercreated')
    })
    .catch(err=>{
        res.status(400).json(err)
    })

})

rootRoute.post('message', (req, res)=>{
    messages.createMessages().then(()=>{
        res.status(200).json('msgcreated')
    })
    .catch(err=>{
        res.status(400).json(err)
    })

})




 module.exports = rootRoute