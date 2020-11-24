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
        type: 'checkbox',
        message: "Table of Conents",
        name: 'contents',
        choices: ['Installation \r', '* Usage \r', '* License \r', '* Contributers \r', '* Tests \r']
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
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'GPL-2.0', 'AFL-3.0', 'BSD 4-Clause', 'GPLV3']
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

* ${response.contents.join('')}

# Installation

* ${response.installation}

# Project Usage

* ${response.usage}

# License

* ${response.license}

# Contributers

* ${response.contributing}

# Tests

* ${response.tests}`

, (err) =>
    err ? console.error(err) : console.log(''))
)