//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

//Questions Array
const questions =
    [
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your application:',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your application:',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions:',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please enter directions for how to use your application:',
        },

        {
            type: 'list',
            name: 'license',
            message: 'Please enter your license info:',
            choices: ['MIT', 'Mozilla', 'Apache', 'none'],
        },

        {
            type: 'input',
            name: 'contributions',
            message: 'Please enter contributors and/or info on how to contribute to your project:',
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Please enter your tests:',
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please enter your gitHub username:',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your developer email address:',
        },


    ]

//Function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("You did it!")
        }
    })
}

//Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            console.log(data)
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
