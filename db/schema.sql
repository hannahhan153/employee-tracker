-- CREATE TABLE department (
--     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30) UNIQUE NOT NULL
-- )

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
  role_id INTEGER,
  manager_id INTEGER(10) NULL,
  industry_connected BOOLEAN NOT NULL
  );

