# README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application will automatically generate a basic README.md file based on responses to prompts from the user.

## Table of Contents

- [README Generator](#readme-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)

## Installation

Download the files. Open a bash terminal in the main directory. Run "npm install". 

## Usage

Run "node index.js". Answer the prompts. Once all prompts are answered, a README.md file filled out with your responses will be generated in the path indicated in the index.js file (it is set to generate in the "sample" folder by default, but you can either change the path or cut and paste the finished file where you need it).

Be aware that running the application again will overwrite the existing README.md if there is already one in the target directory. Move it or change the target directory if you want to keep the generated file.

The readme automatically links to a "screenshot.png" located inside an sibling "assets/images/" relative directory. Edit this if you wish and feel free to edit the completed readme as needed.

Not adding a license will leave out that section. Not adding contribution guidelines will default to the general "Contributer Covenant".

[Video Link of Usage](https://watch.screencastify.com/v/GnOfxxEeXg6mfAM5mJvI)

https://user-images.githubusercontent.com/35825121/184833727-37a22623-433b-4d58-a335-70f0dac8f378.mp4

## Questions

Github Profile: [acotterson](https://github.com/acotterson)

If you have any additional questions, I can be reached at [acotterson@gmail.com](mailto:acotterson@gmail.com).

## License

Licensed under the MIT License: [MIT](https://opensource.org/licenses/MIT)
