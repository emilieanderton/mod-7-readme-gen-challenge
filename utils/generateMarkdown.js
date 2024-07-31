// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
} else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
} else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
} else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
} else if (license === 'BSD 3-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
} else if (license === 'None') {
    return '';
}
return renderLicenseBadge[license] || '';
}

console.log(renderLicenseBadge(''));
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'BSD 3-Clause License': 'https://opensource.org/licenses/BSD-3-Clause',
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else
    return `## License

This project is licensed under the ${license}. For more information, see the [license link](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateReadme(answers) {
  return `
# ${answers.title}
  ${renderLicenseBadge(answers.license)}

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

export default generateReadme;
export { renderLicenseBadge, renderLicenseSection };