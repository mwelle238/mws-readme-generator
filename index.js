// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What is your motivation for your project?",
    "Why did you build this project?",
    "What problem does it solve?",
    "What did you learn?",
    "How do you install your project?",
    "How do you use your project?", 
    "List all of your collaborators, 3rd party assets, or tutorials followed:",
    "What license does your project use?" ];

const answers = questions.map(q => {
    const obj = {...q};
    // obj.answer = inquires shit
    return obj;
})

    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const projectTitle = "# " + data[0];
    const sectionHeaders = ["## Description", "## Installation", "## Usage", "## Credits", "## License" ];
    fs.writeFile(fileName, 
`${projectTitle}

${sectionHeaders[0]}

${data[1]}
${data[2]}
${data[3]}
${data[4]}

${sectionHeaders[1]}

${data[5]}

${sectionHeaders[2]}

${data[6]}

${sectionHeaders[3]}

${data[7]}

${sectionHeaders[4]}

${data[8]}`, (err) =>
        err ? console.error(err) : console.log("success!"));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('test.md', questions);
}

// Function call to initialize app
init();
