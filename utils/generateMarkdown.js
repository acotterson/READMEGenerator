// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "GPLv2":
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      case "GPLv3":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "LGPLv3":
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      case "AGPLv3":
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      case "Apache":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "BSD 2-clause":
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      case "BSD 3-clause":
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      default:
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
    case "GPLv2":
      return "[GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GPLv3":
      return "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
    case "LGPLv3":
      return "[LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)";
    case "AGPLv3":
      return "[AGPL v3](https://www.gnu.org/licenses/agpl-3.0)";
    case "Apache":
      return "[Apache](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 2-clause":
      return "[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-clause":
      return "[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "[Unlicense](http://unlicense.org/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    let spiel = "## License  \n\nLicensed under the ";
    switch (license) {
      case "MIT":
        spiel += "MIT License: ";
        break;
      case "GPLv2":
        spiel += "GNU General Public License, Version 2: ";
        break;
      case "GPLv3":
        spiel += "GNU General Public License, Version 3: ";
        break;
      case "LGPLv3":
        spiel += "GNU Lesser General Public License: ";
        break;
      case "AGPLv3":
        spiel += "GNU Affero General Public License: ";
        break;
      case "Apache":
        spiel += "Apache License, Version 2.0: ";
        break;
      case "BSD 2-clause":
        spiel += "BSD 2-Clause License: ";
        break;
      case "BSD 3-clause":
        spiel += "BSD 3-Clause License: ";
        break;
      default:
        spiel += "Unlicense: ";
    }
    return spiel + renderLicenseLink(license);
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    testing,
    license,
    githubUser,
    email,
  } = data;

  return `# ${title}  

${renderLicenseBadge(license)}  

${githubUser}  
${email}  

## Description  

${description}  

## Table of Contents  

- [Hi](#hi)  
  - [Description](#description)  
  - [Table of Contents](#table-of-contents)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Credits](#credits)  
  - [How to Contribute](#how-to-contribute)  
  - [Tests](#tests)  
  - [License](#license)  

## Installation  

${installation}  

## Usage  

${usage}  

![Screenshot](assets/images/screenshot.png)  

## Credits  

List your collaborators, if any, with links to their GitHub profiles.  

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## How to Contribute  

${
  contribution
    ? contribution
    : "[Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)"
}  



## Tests  

${testing}  

${renderLicenseSection(license)}  `;
}

module.exports = generateMarkdown;
