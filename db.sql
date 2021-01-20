USE crud_mysql;

CREATE TABLE users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
	phone VARCHAR(10) NOT NULL
);crud_mysqlusers 

ALTER TABLE users ADD UNIQUE (email);