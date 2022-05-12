-- USE employee;

INSERT INTO department (name)
VALUES 
('Sales'),
('Human Resources'),
('Accounting'),
('Administration');


INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('Salesperson', 50000, 1), 
    ('Human Resources Generalist', 85000, 2),
    ('Human Resources Analyst', 70000, 2),
    ('Senior Accountant', 95000, 3),
    ('Financial Analyst', 75000, 3),
    ('Administrative Assistant', 85000, 4),
    ('Executive Assistant', 76000, 4);

INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Millie', 'Torres', 1, 1), 
    ('Justin', 'Garcia', 1, 1),
    ('Emmanuel', 'Allen', 1, 0),
    ('Preston', 'Jones', 1, 1),
    ('Henry', 'Lee', 1, 1),
    ('Brody', 'Moore', 1, 1),
    ('Gianna', 'Monroe', 1, 0)