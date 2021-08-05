// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license == 'Mozilla') {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
  } else if (license == 'Apache') {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license == 'none') {
    return '';
  }

}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return "https://opensource.org/licenses/MIT";
  } else if (license == 'Mozilla') {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license == 'Apache') {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license == 'none') {
    return '';
  }
}

// Function that adds or removes license from table of contents 
  function renderLicenseHeading(license) {
    if (license == 'none') {
      return '';

    } else {
      return '* [License](#License)'
    }
  }
  // A function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license == 'none') {
      return '';
    } else {
      return '## License: \n License info found here at: '
    } 
  }

  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
${renderLicenseHeading(data.license)}
* [Contributions](#Contributions)
* [Reporting](#Reporting)
* [Tests](#Tests)
* [Questions](#Questions)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributions:
${data.contributions}

## Tests:
${data.tests}

## Questions:

You can find me on GitHub at: https://github.com/${data.github}

If you have any questions you may contact me at: ${data.email}`;

  }

  module.exports = generateMarkdown;
