import newConn from './dbconnection';

const userServices = {}

userServices.createUser =(username, avatar)=>{
return newConn.none('INSERT INTO users VALUES (username=${username}, avatar=${avatar})', {username, avatar})

}

export default userServices