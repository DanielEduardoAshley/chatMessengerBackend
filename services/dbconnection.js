const pg = require('pg-promise')({})

const oncify = (conn)=>{
  let checkConn = null

  const connection =()=>{
        if(!checkConn){
            const db = pg(conn)
            checkConn = 1
            return db
        }
        return db

  }
  return connection

}

const newConn = oncify('postgres://localhost/chatapp')


export default newConn