// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const licenses = ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Other', 'None' ];
const badges = ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                '[![License: Other](https://img.shields.io/badge/License-Other-red.svg)](Other)',
                '[![License: None](https://img.shields.io/badge/License-NONE-lightgrey.svg)](None)',];

const questions = [
    { type: 'input', message: "What is the title of your project?", name: 'title' },
    { type: 'input', message: "(Paraphrase) What is your motivation for your project?", name: 'motive' },
    { type: 'input', message: "(Paraphrase) Why did you build this project?", name: 'why'},
    { type: 'input', message: "(Paraphrase) What problem does it solve?", name: 'problem'},
    { type: 'input', message: "(Paraphrase) What did you learn?", name: 'lesson'},
    { type: 'input', message: "(Paraphrase) How do you install your project?", name: 'install'},
    { type: 'input', message: "(Paraphrase) How do you use your project?", name: 'usage'}, 
    { type: 'input', message: "List all of your collaborators, 3rd party assets, or tutorials followed:", name: 'credits'},
    { type: 'list',  message: "Please select your license:", name: 'license', choices: licenses },
    { type: 'input', message: "enter your github username:", name: 'github'},
    { type: 'input', message: "Enter your email address:", name: 'email'} ];

function getLicBadge(license){
    for (let i=0; i<badges.length; i++){
        if (license === licenses[i]) return badges[i];
    }
    return ' ';
}

    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const projectTitle = "# " + data.title;
    const sectionHeaders = ["## Description", "## Installation", "## Usage", "## Credits", "## License", "## Contact Info" ];
    const badge = getLicBadge(data.license);

    fs.writeFile(fileName, 
`${projectTitle}
                                                        ${badge}
${sectionHeaders[0]}

${data.motive}
${data.why}
${data.problem}
${data.lesson}

${sectionHeaders[1]}

${data.install}

${sectionHeaders[2]}

${data.usage}

${sectionHeaders[3]}

${data.credits}

${sectionHeaders[4]}

${data.license}

${sectionHeaders[5]}

mailto - ${data.email}
link - https://www.github.com/${data.github}`, (err) =>
        err ? console.error(err) : console.log("success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('test.md', data);
    });
}

// Function call to initialize app
init();
