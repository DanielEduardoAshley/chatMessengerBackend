const express = require('express');
const messageRoute = require('./routes/messages')
const app = express();
const port = 3003

app.use(messageRoute, '/')


app.post(()=>{

})

app.get(()=>{

})

app.put(()=>{

})


app.delete(()=>{

})


app.listen(port, ()=>{
    console.log(`Listening at port ${port}`)
})
