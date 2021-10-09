const express = require('./express');
const fs = require('./fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Team Managers Name',
            name: 'manager'
        },
        {
            type: 'input',
            message: 'Employee ID',
            name: 'employeeID'
        },
        {
            type: 'input',
            message: 'Email Address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Office ID',
            name: 'officeId'
        }
    ])

    .then((response) => {
        const data = `Manager: ${response.manager}`

        fs.write('index.html', data, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    });