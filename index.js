const inquirer = require("inquirer");
const consoleTable = require('console.table');
const db = require('./db/connection');

function start() {
    inquirer.prompt([{
        name: 'employee',
        message: 'What would you like to do?',
        type: 'list',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    }]).then((res)=> {
        console.log(res)
        switch (res.employee) {
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
        break;
        case 'Add Role':
        break;
        case 'View All Departments':
        break;
        case 'Add Department':
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
        start();
    })
};

const addEmployee = () => {
    inquirer.prompt([
        {
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
        type: 'input',
        },
        {
        name: 'manager',
        message: 'What is the manager ID of the employee?',
        type: 'input',
        }
    ]).then((res) => {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`
        db.query(sql, [res.first, res.last, res.role, res.manager],
        (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log('Added Bob Jones as an Employee')
            console.table(res);
            start();
        });
    }
    )};

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            name: 'employee',
            message: "Which employee's role would you like to update?",
            type: 'list',
            choices: ['Millie Torres', 'Justin Garcia', 'Emmanuel Allen', 'Preston Jones', 'Henry Lee', 'Brody Moore', 'Gianna Monroe']
        },
        {
            name: 'role',
            message: "Which role do you want to assign the selected employee?",
            type: 'list',
            choices: ['Salesperson', 'Human Resources Generalist', 'Human Resources Analyst', 'Senior Accountant', 'Financial Analyst', 'Administrative Assistant', 'Executive Assistant']
        }
    ]).then((res) => {
        db.query(`SELECT id FROM roles WHERE title = ?`, res.role, (err, res) => {
            if (err) {
                console.log(err);
        }
        db.query(`UPDATE employees SET role_id = ? WHERE first_name = ?`, [result[0].id, res.employee], (err, res) => {
            if (err) {
                console.log(err);
        }
        console.log("Updated Employee's Role");
            console.table(res);
            start();
    })
    })
}
    )}

start()