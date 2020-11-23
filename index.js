const fs = require('fs');
const inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
       type: 'input',
       message: "What is your projects description?",
       name: 'description'
    },
    {
        type: 'input',
        message: "Table of Conents?",
        name: 'contents'
    },
    {
        type: 'input',
        message: 'Installation Instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who/what is contributing to this project?(People or websites)',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'How can a user run tests on your project?',
        name: 'tests'
    }
]).then((response)=>
    fs.writeFile('read.md', `# ${response.title}

# Description
    
* ${response.description}

# Table of Contents

* ${response.contents}

# Installation

* ${response.installation}

# Project Usage

* ${response.usage}

# Contributers

* ${response.contributing}

# Tests

* ${response.tests}`

, (err) =>
    err ? console.error(err) : console.log(''))
)