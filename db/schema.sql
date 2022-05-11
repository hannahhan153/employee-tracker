DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS department;


CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
description TEXT
);

-- CREATE TABLE roles (
--     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(30) UNIQUE NOT NULL,
--     salary DECIMAL NOT NULL,
--     department_id INTEGER NOT NULL,
--     PRIMARY KEY (id)
-- )

CREATE TABLE employees (          
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department_id INTEGER,
  industry_connected BOOLEAN NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
  );

