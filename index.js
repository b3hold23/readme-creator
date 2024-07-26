// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`${fileName} has been created`);
    });
}

//  POTENTIAL TRASH
// inquirer.prompt(questions)
//     .then((response) => {
//         const readmeContent = generateReadmeContent(response);
//         writeToFile('README.md', readmeContent);
//     });
//  POTENTIAL TRASH


// // TODO: Create a function to initialize app
 async function init() {
    const response = await inquirer.prompt(questions);
    const readmeContent = generateReadmeContent(response);
    writeToFile('README.md', readmeContent);
}

// // Function call to initialize app
init();


function generateReadmeContent(response) {
    const { projectTitle, description, installation, usage, credits, license, features, contribute, test } = response;

    const readmeContent = `# ${projectTitle}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

## Features
${features}

## Contribute
${contribute}

## Tests
${test}
`;

    return readmeContent;
}

init().catch((err) => {
    console.error(err);
});