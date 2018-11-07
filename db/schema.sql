DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INTEGER(10) NOT NULL AUTO_INCREMENT, 
burgerName VARCHAR(40) NOT NULL, 
devoured boolean,
PRIMARY KEY(id)
);