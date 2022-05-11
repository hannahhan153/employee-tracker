-- USE employee;

INSERT INTO department (name, description)
VALUES 
('Sales', 'Sales work directly with prospects and convert them into paying customers. Sales reps can work in the office, virtually, in the field, or in any combination of the three.'),
('Human Resources', 'HR typically includes onboarding new employees and implementing training programs. Other facets of this human resources job include aiding employees in filling out applicable paperwork and getting fresh hires set up on payroll and benefits.'),
('Accounting', 'Accounting is responsible for a large number of administrative functions within an organization'),
('Administration', 'Administration provides valuable services, enabling work processes to operate seamlessly and decision-makers to focus on value-added tasks and responsibilities. Administrative roles include day-to-day tasks that keep an organization running smoothly and efficiently.');



-- INSERT INTO roles
--     (title, salary, department_id)
-- VALUES
--     ('Salesperson', 50000, 1), 
--     ('Human Resources Generalist', 85000, 2),
--     ('Human Resources Analyst', 70000, 2),
--     ('Senior Accountant', 95000, 3),
--     ('Financial Analyst', 75000, 3),
--     ('Administrative Assistant', 85000, 4),
--     ('Executive Assistant', 76000, 4);

INSERT INTO employees
    (first_name, last_name, department_id, industry_connected)
VALUES
    ('Millie', 'Torres', 1, 1), 
    ('Justin', 'Garcia', 1, 1),
    ('Emmanuel', 'Allen', 1, 0),
    ('Preston', 'Jones', 1, 1),
    ('Henry', 'Lee', 1, 1),
    ('Brody', 'Moore', 1, 1),
    ('Gianna', 'Monroe', 1, 0)