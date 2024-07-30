// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import { renderLicenseSection } from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'Mozilla Public License 2.0', 'BSD 3-Clause license', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

function generateReadme(answers) {
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description}

  ## Table of Contents
- [installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [License](#License)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contribution
  ${answers.contribution}
  
  ## Tests
  ${answers.tests}
  
 ${renderLicenseSection(answers.license)}
  
  ## Questions
  If you have any questions about this project, you can contact me at [${answers.email}](mailto:${answers.email}).
  You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
  `;
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        }
        else {
            console.log('File has been written successfully');
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
        console.log('README.md has been generated!');
    });
}

// Function call to initialize app
init();
