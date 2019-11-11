const newConn = require( './dbconnection');

const userServices = {}

userServices.createUser =(username, avatar)=>{
    console.log('red')
return newConn.none('INSERT INTO users (username, avatar) VALUES (${username}, ${avatar});', {username, avatar})

}

module.exports = {userServices}