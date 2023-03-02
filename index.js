const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const { get } = require('http');

let employees = [];

const htmlTemp = (arr) => {
    let cards = ``
    arr.forEach(
        function (employee) {
            if (employee.getRole() === 'Manager') {
                cards += `<!-- Cards for team member -->
                <div class="card col-3 mx-auto p-3">\n
                    <div class="card-body">\n
                        <h5 class="card-title">${employee.getRole()}</h5>\n
                        <p class="card-text">${employee.getName()}</p>\n
                    </div>\n
                    <ul class="list-group list-group-flush">\n
                        <li class="list-group-item">${employee.getID()}</li>\n
                        <li class="list-group-item">${employee.officeNumber}</li>\n
                    </ul>\n
                    <div class="card-body">\n
                        <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a>\n
                    </div>\n
                </div>\n
        <!-- End team member card -->`
            } else if (employee.getRole() === 'Engineer') {
                cards += `<!-- Cards for team member -->
                <div class="card col-3 mx-auto p-3">\n
                    <div class="card-body">\n
                        <h5 class="card-title">${employee.getRole()}</h5>\n
                        <p class="card-text">${employee.getName()}</p>\n
                    </div>\n
                    <ul class="list-group list-group-flush">\n
                        <li class="list-group-item">${employee.getID()}</li>\n
                        <li class="list-group-item">${employee.getGithub()}</li>\n
                    </ul>\n
                    <div class="card-body">\n
                        <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a>\n
                    </div>\n
                </div>\n
        <!-- End team member card -->`
            } else {
                cards += `<!-- Cards for team member -->
                <div class="card col-3 mx-auto p-3">\n
                    <div class="card-body">\n
                        <h5 class="card-title">${employee.getRole()}</h5>\n
                        <p class="card-text">${employee.getName()}</p>\n
                    </div>\n
                    <ul class="list-group list-group-flush">\n
                        <li class="list-group-item">${employee.getID()}</li>\n
                        <li class="list-group-item">${employee.getSchool()}</li>\n
                    </ul>\n
                    <div class="card-body">\n
                        <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a>\n
                    </div>\n
                </div>\n
        <!-- End team member card -->`
            }
        }
    )


    return `<!DOCTYPE html>\n
                        <html lang="en">\n
                            <head>\n
                                <meta charset="UTF-8" />\n
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n
                                <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n
                                <link rel="stylesheet" href="./style/reset.css"/>\n
                                <link rel="stylesheet" href="./style/style.css"/>\n
                                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>\n
                                <title>New Dev Team</title>\n
                            </head>\n
                            \n
                            <body>\n
                                <nav class="navbar bg-dark text-light">\n
                                    <div class="container-fluid">\n
                                        <span class="navbar-brand  mb-0 h1">New Development Team</span>\n
                                    </div>\n
                                </nav>\n
                                \n
                                <div class = "mx-auto row square-box container d-flex p-3 column-gap row-gap">\n
                            ${cards}
                                        \n
                                </div>\n
                                \n
                            </body>\n
                        </html>`
}

function createManager() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Team Manager: Please enter your name.',
                name: 'name',
            },
            {
                type: 'number',
                message: 'Team Manager: Please enter your employee ID number.',
                name: 'idnum'
            },
            {
                type: 'input',
                message: 'Team Manager: Please enter your email address.',
                name: 'email'
            },
            {
                type: 'number',
                message: 'Team Manager: Please enter your office number.',
                name: 'offnum'
            }
        ])
        .then((response) => {
            console.log(response)
            const manager = new Manager(response.name, response.idnum, response.email, response.offnum)
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
                name: 'name',

            },
            {
                type: 'number',
                message: 'Please enter their employee ID number.',
                name: 'idnum'
            },
            {
                type: 'input',
                message: 'Please enter their email address.',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please enter their github ID',
                name: 'github'
            }
        ])
        .then((response) => {
            let engineer = new Engineer(response.name, response.idnum, response.email, response.github);
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
                name: 'name',
            },
            {
                type: 'number',
                message: 'Please enter their employee ID number.',
                name: 'idnum'
            },
            {
                type: 'input',
                message: 'Please enter their email address.',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please enter the name of their school.',
                name: 'school'
            }
        ])
        .then((response) => {
            let intern = new Intern(response.name, response.idnum, response.email, response.school);
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
                console.log(employees)

                fs.writeFile('./dist/index.html', htmlTemp(employees), (err) => 
                err?console.log(err):console.log('Success!'))

            }
        })
}



createManager();