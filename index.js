// TODO: Include packages needed for this application
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = await inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'What is the description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Do you have any credits?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'License:',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Features:',
        name: 'features',
    },
    {
        type: 'input',
        message: 'How can others contribute?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Do you have any tests for your application?',
        name: 'test',
    },
])
.then((response) =>
    console.log(
        response
    )
);




// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
