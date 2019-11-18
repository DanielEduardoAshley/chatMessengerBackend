const express = require('express');
const { messages } = require('../services/messages');
const { userServices } = require('../services/users');
const rootRoute = express.Router()

rootRoute.get('/', (req, res)=>{
    messages.getMessages().then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(400).json(err)
    })

})

rootRoute.post('/user', async(req, res)=>{
    const {username} = req.body
    const {avatar} = req.body 
    console.log('here', username, avatar)
   return await userServices.createUser(username, avatar).then((id)=>{
        res.status(200).json( id)
        return id
    })
    .catch(err=>{
        res.status(400).json(err)
    })


})

rootRoute.post('/message', (req, res)=>{
    const {textbody} = req.body
    const {userid} = req.body
    console.log('kl',textbody, userid)

    messages.createMessages(textbody, userid).then(()=>{
        res.status(200).json('msgcreated')
    })
    .catch(err=>{
        res.status(400).json(err)
    })

})




 module.exports = rootRoute