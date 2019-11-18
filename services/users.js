const newConn = require( './dbconnection');

const userServices = {}



userServices.createUser =(username, avatar)=>{
    console.log('red')
return newConn.one('INSERT INTO users (username, avatar) VALUES (${username}, ${avatar}) RETURNING users.id', {username, avatar})

}

module.exports = {userServices}