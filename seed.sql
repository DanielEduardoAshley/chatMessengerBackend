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
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    time_posted timestamptz NOT NULL 

    
);



INSERT INTO users
(username, avatar)
VALUES
('john88', 'img' );

INSERT INTO messages
(text_body, user_id, time_posted)
VALUES
('Hello World', 1, now());

