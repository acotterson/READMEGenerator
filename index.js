// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const MDGen = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    choices: ["email", "phone", "telekinesis"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, JSON.stringify(data, null, "\t").slice(1,-1), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((rawData) => {
    markdownData = MDGen(rawData);
    writeToFile("README.md", markdownData);
  });
}

// Function call to initialize app
init();
