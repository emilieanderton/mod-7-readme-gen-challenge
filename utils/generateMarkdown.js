// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    'GNU GPL v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
    'BSD 3-Clause License': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
    'None': '',
  };
  return licenses[license] || '';
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
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
export { renderLicenseBadge, renderLicenseSection };