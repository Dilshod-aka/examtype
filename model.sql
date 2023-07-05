CREATE DATABASE type;

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(90) not NULL,
    password VARCHAR(90) not NULL
);

INSERT INTO users(username, password)VALUES('Soliha', '11111');
