// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

const licenses = {
    "MIT": {
        "badge": "![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)",
        "text": "This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details."
    },
    "GPLv3": {
        "badge": "![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)",
        "text": "This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details."
    },
    "Apache 2.0": {
        "badge": "![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
        "text": "This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details."
    },
    "BSD": {
        "badge": "![BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)",
        "text": "This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details."
    },
    "Boost": {
        "badge": "![Boost Software License 1.0 License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)",
        "text": "This project is licensed under the Boost Software License 1.0 - see the [LICENSE](LICENSE) file for details."
    },
    "Creative Commons Zero": {
        "badge": "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",
        "text": "This project is licensed under the License: CC0-1.0 - see the [LICENSE](LICENSE) file for details."
    },
    "Eclipse": {
        "badge": "[Eclipse Public License 1.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)",
        "text": "This project is licensed under the Eclipse Public License 1.0 - see the [LICENSE](LICENSE) file for details."
    },
    
};
// TODO: Create an array of questions for user input
const questions = [
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
        //TODO: create button for license and add multiple choice.
        type: 'list',
        message: 'Choose your license:',
        name: 'license',
        choices: Object.keys(licenses)
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
];

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

// // TODO: Create a function to initialize app
 async function init() {
    try {
        const response = await inquirer.prompt(questions);
        const readmeContent = generateReadmeContent(response);
        writeToFile('README.md', readmeContent);
    } catch (err) {
        console.log(err);
    }
 }

// Takes in user input and inputs it into a readMe file.
function generateReadmeContent(response) {
    const { projectTitle, description, installation, usage, credits, license, features, contribute, test } = response;

    const licenseBadge = licenses[license].badge;
    const licenseText = licenses[license].text;

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
${licenseBadge}

## Features
${features}

## Contribute
${contribute}

## Tests
${test}
`;

    return readmeContent;
}

//Call the function
init();