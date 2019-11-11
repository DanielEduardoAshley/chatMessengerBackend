const newConn = require("./dbconnection");

const messages = {};

messages.createMessages = (textbody, userid) => {
  return newConn.none(
    "INSERT INTO messages VALUES(text_body=${textbody}, user_id=${userid})",
    { textbody, userid }
  );
};

messages.getMessages = () => {
  return newConn.any(
    "SELECT * FROM messages JOIN users ON user_id = users.id ORDER BY time_posted DESC"
  );
};

module.exports = { messages };
