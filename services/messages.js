import newConn from './dbconnection'

messages = {}

messages.createMessages = (textbody, userid)=>{

    return newConn.none('INSERT INTO messages VALUES(text_body=${textbody}, user_id=${userid})',{textbody, userid})
}

messages.getMessages = () =>{

    return newConn.any('SELECT * FROM messages JOIN ON users WHERE user_id=user.id time_posted DESC')
}

export default messages