const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

let employees = [];

function createManager() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Team Manager: Please enter your name.',
                name: 'managername',
            },
            {
                type: 'number',
                message: 'Team Manager: Please enter your employee ID number.',
                name: 'manageridnum'
            },
            {
                type: 'input',
                message: 'Team Manager: Please enter your email address.',
                name: 'manageremail'
            },
            {
                type: 'number',
                message: 'Team Manager: Please enter your office number.',
                name: 'manageroffnum'
            }
        ])
        .then((response) => {
            console.log(response)
            const manager = new Manager(response.managername, response.manageridnum, response.manageremail, response.manageroffnum)
            employees.push(manager)
            console.log('----------------------Team Manager----------------------')
            console.log(manager)
            nextEmployee();
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter the engineer's name.",
                name: 'engname',

            },
            {
                type: 'number',
                message: 'Please enter their employee ID number.',
                name: 'engidnum'
            },
            {
                type: 'input',
                message: 'Please enter their email address.',
                name: 'engemail'
            },
            {
                type: 'number',
                message: 'Please enter their github ID',
                name: 'enggithub'
            }
        ])
        .then((response) => {
            let engineer = new Engineer(response.engname, response.engidnum, response.engemail, response.enggithub);
            employees.push(engineer);
            console.log('----------------------New Engineer----------------------');
            console.log(engineer);
            nextEmployee();
        }
        )
}

function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter the intern's name.",
                name: 'intname',
            },
            {
                type: 'number',
                message: 'Please enter their employee ID number.',
                name: 'intidnum'
            },
            {
                type: 'input',
                message: 'Please enter their email address.',
                name: 'intemail'
            },
            {
                type: 'number',
                message: 'Please enter the name of their school.',
                name: 'intschool'
            }
        ])
        .then((response) => {
            let intern = new Intern(response.intname, response.intidnum, response.intemail, response.intschool);
            employees.push(intern);
            console.log('----------------------New Intern----------------------');
            console.log(intern);
            nextEmployee();
        })
}

function nextEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add another employee to the team? Select done to build your page.',
                choices: ['Add Engineer', 'Add Intern', 'Done'],
                name: 'newemployee'
            }
        ])
        .then((response) => {
            if (response.newemployee === 'Add Engineer') {
                createEngineer()
            }

            if (response.newemployee === 'Add Intern') {
                createIntern()
            }

            if (response.newemployee === 'Done') {
                // Write File after selecting done.
            }
        })
}

createManager();