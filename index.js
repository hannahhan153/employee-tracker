const inquirer = require("inquirer");
const consoleTable = require('console.table');
const db = require('./db/connection');

function start() {
    inquirer.prompt([{
        name: 'start',
        message: 'What would you like to do?',
        type: 'list',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    }]).then((res) => {
        console.log(res)
        switch (res.start) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Quit':
                exit();
        }
    })
};

const viewAllEmployees = () => {
    db.query(`SELECT employees.id, employees.first_name AS first, employees.last_name AS last, roles.title AS title, department.name AS department, roles.salary AS salary, CONCAT(manager.first_name,' ', manager.last_name) AS manager
    FROM employees
    LEFT JOIN employees manager 
    ON manager.id = employees.manager_id
    INNER JOIN roles 
    ON employees.role_id = roles.id
    INNER JOIN department ON department.id = roles.department_id`, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log('View All Employees');
        console.table(res);
    })
};

const addEmployee = () => {
    inquirer.prompt([{
            name: 'first',
            message: 'What is the first name of the employee?',
            type: 'input',
        },
        {
            name: 'last',
            message: 'What is the last name of the employee?',
            type: 'input',
        },
        {
            name: 'role',
            message: 'What is the role ID of the employee?',
            type: 'number',
        },
        {
            name: 'manager',
            message: 'What is the manager ID of the employee?',
            type: 'number',
        }
    ]).then((res) => {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`
        db.query(sql, [res.first, res.last, res.role, res.manager],
            (err, res) => {
                if (err) {
                    console.log(err);
                }
                console.log('Added new Employee');
            });
    })
};

const updateEmployeeRole = () => {
    inquirer.prompt([{
            name: 'updateEmployee',
            message: "Which employee's role would you like to update?",
            type: 'list',
            choices: ['Millie Torres', 'Justin Garcia', 'Emmanuel Allen', 'Preston Jones', 'Henry Lee', 'Brody Moore', 'Gianna Monroe']
        },
        {
            name: 'updateRole',
            message: "Which role do you want to assign the selected employee?",
            type: 'list',
            choices: ['Salesperson', 'Human Resources Generalist', 'Human Resources Analyst', 'Senior Accountant', 'Financial Analyst', 'Administrative Assistant', 'Executive Assistant']
        }
    ]).then((res) => {
        db.query(`SELECT id FROM roles WHERE title = ?`, res.role, (err, res) => {
            if (err) {
                console.log(err);
            }
            db.query(`UPDATE employees SET role_id = ? WHERE first_name = ?`, [res[0].id, res.employee], (err, res) => {
                if (err) {
                    console.log(err);
                }
                console.log("Updated Employee's Role");
            })
        })
    })
}

const viewAllRoles = () => {
    db.query(`SELECT roles.id, roles.title AS title, roles.salary AS salary, department.name AS department FROM roles 
    LEFT JOIN department on roles.department_id = department.id`, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log('View all Roles');
        console.table(res);
    })
}

const addRole = () => {
    inquirer.prompt([{
        name: 'nameRole',
        message: 'What is the name of the role?',
        type: 'input',
    },
    {
        name: 'salaryRole',
        message: 'What is the salary of the role?',
        type: 'input',
    },
    {
        name: 'departmentRole',
        message: 'What is the department id of the role?',
        type: 'number',
    }
]).then((res) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?,?,?)`
    db.query(sql, [res.nameRole, res.salaryRole, res.departmentRole],
        (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log('Added new Role')
            console.table(res);
        });
})
};

const viewAllDepartments = () => {
    db.query(`SELECT department.id, department.name AS department FROM department`, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log('View all Departments');
        console.table(res);
    })
}

const addDepartment = () => {
    inquirer.prompt([{
        name: 'department',
        message: 'What is the name of the department?',
        type: 'input',
    }
]).then((res) => {
    const sql = `INSERT INTO department (name)
    VALUES (?)`
    db.query(sql, res.department,
        (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log('Added new Department')
            console.table(res);
        });
})
}
start()