// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
var answers;
// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', message: "What is the title of your project?", name: 'title' },
    { type: 'input', message: "(Paraphrase) What is your motivation for your project?", name: 'motive' },
    { type: 'input', message: "(Paraphrase) Why did you build this project?", name: 'why'},
    { type: 'input', message: "(Paraphrase) What problem does it solve?", name: 'problem'},
    { type: 'input', message: "(Paraphrase) What did you learn?", name: 'lesson'},
    { type: 'input', message: "(Paraphrase) How do you install your project?", name: 'install'},
    { type: 'input', message: "(Paraphrase) How do you use your project?", name: 'usage'}, 
    { type: 'input', message: "List all of your collaborators, 3rd party assets, or tutorials followed:", name: 'credits'},
    { type: 'list',  message: "Please select your license:", name: 'license', choices: ['MIT', 'none', 'other']} ];

inquirer.prompt(questions)
    .then((data) => {
        writeToFile('test.md', data);
    })

    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const projectTitle = "# " + data.title;
    const sectionHeaders = ["## Description", "## Installation", "## Usage", "## Credits", "## License" ];
    fs.writeFile(fileName, 
`${projectTitle}

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

${data.license}`, (err) =>
        err ? console.error(err) : console.log("success!"));
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
