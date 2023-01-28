const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

let employees = []

function createManager() {
    
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Team Manager: Please enter your name.',
            name: 'managername'
        },
        {
            type: 'input',
            message: 'Team Manager: Please enter your employee ID number.',
            name: 'manageridnum'
        },
        {
            type: 'input',
            message: 'Team Manager: Please enter your email address.',
            name: 'manageremail'
        },
        {
            type: 'input',
            message: 'Team Manager: Please enter your office number.',
            name: 'manageroffnum'
        }
    ])
    .then((response) => {
        const manager = new Manager(response.managername, response.manageridnum, response.manageremail, response.manageroffnum)
        employees.push(manager)

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
           createEngineer
        }
    })
}