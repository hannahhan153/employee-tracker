DROP DATABASE IF EXISTS employee;
CREATE DATABASE employee;

USE employee;




CREATE TABLE employees (          
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
  PRIMARY KEY (id) );

