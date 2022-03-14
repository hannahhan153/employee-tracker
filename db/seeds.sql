USE employee;

INSERT INTO department 
    (name)
VALUES 
    ('Sales')
    ('Human Resources')
    ('Accounting')
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
    ('Millie', 'Torres', 1), 
    ('Justin', 'Garcia', 2, 1),
    ('Emmanuel', 'Allen', 3),
    ('Preston', 'Jones', 4, 3),
    ('Henry', 'Lee', 5, 3),
    ('Brody', 'Moore', 6, 5),
    ('Gianna', 'Monroe', 7)