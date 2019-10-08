DROP DATABASE IF EXISTS chatapp;
CREATE DATABASE chatapp;

\c chatapp;

DROP TABLE IF EXISTS users, messages;



CREATE TABLE users
(
   id SERIAL PRIMARY KEY, 
   username VARCHAR,
   avatar VARCHAR
 
);

CREATE TABLE messages
(
    id SERIAL PRIMARY KEY,
    text_body VARCHAR,
    user_id INT REFERENCES users(id) ON DELETE CASCADE

    
);



INSERT INTO users
(username, avatar)
VALUES
('john88', 'img' );

INSERT INTO messages
(text_body, user_id)
VALUES
('Hello World', 1);

