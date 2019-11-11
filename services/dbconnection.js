const pg = require("pg-promise")({});
const db = pg("postgres://localhost/chatapp")

const oncify = conn => {
  let checkConn = null;

  const connection = () => {
    if (!checkConn) {
      const db = pg(conn);
      checkConn = 1;
      return db;
    }
    return db;
  };
  return connection;
};

const newConn = oncify("postgres://localhost/chatapp");

module.exports = db;
