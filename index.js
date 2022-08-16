// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const MDGen = require('./utils/generateMarkdown');

// Array of prompts for the user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title: ",
  },
  {
    type: "input",
    name: "description",
    message: "Enter description: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information: ",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines: ",
  },
  {
    type: "input",
    name: "testing",
    message: "Enter test instructions: ",
  },
  {
    type: "list",
    message: "License of application: ",
    name: "license",
    choices: ['MIT', 'GPLv2', 'GPLv3', 'LGPLv3', 'AGPLv3', 'Apache', 
    'BSD 2-clause', 'BSD 3-clause', 'Unlicense', 'None']
  },
  {
    type: "input",
    name: "githubUser",
    message: "Enter github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter contact email: ",
  },
];

// Write the readme data to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Prompt for user input, use MDGen to format the readme with the data, then use writeToFile to create the readme file
function init() {
  inquirer.prompt(questions).then((rawData) => {
    markdownData = MDGen(rawData);
    writeToFile("./sample/README.md", markdownData);
  });
}

// Function call to initialize app
init();
