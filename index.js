const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"What is the title of your Project?",
    },
    {
        type:"input",
        name:"projectDescription",
        message:"Please describe what the application/project is",
    },
    {
        type:"input",
        name:"installation",
        message:"What are the necessary steps to run the application?",
    },
    {
        type:"input",
        name:"usage",
        message:"How is this application used?",
    },
    {
        type:"list",
        name:"license",
        message: 'Please select the license you have',
        choices: [
            "Apache",
            "Boost",
            "Boost",
            "Creative Commons",
            "Eclipse",
            "GNU",
            "IBM",
            "ISC",
            "MIT",
            "Mozilla",
            "Open Data Commons",
            "Sil",
            "Unlicense",
            ],
    },
    {
        type:"input",
        name:"contributions",
        message:"Who has contributed to this project?",
    },
    {
        type:"input",
        name:"tests",
        message:"What tests have you performed on the application?",
    },
    {
        type:"input",
        name:"githubUsername",
        message:"What is your GitHub user name?",
    },
    {
        type:"input",
        name:"gitHubLink",
        message:"What is the link to your GitHub profile?",
    },
    {
        type:"input",
        name:"email",
        message:"What is your email for questions about the application?",
    },
  
]).then(function(response){
    // console.log(
    //     `#Title
    //     ${response.title}
    //     Installation
    //     ${response.installation}`
    //     );
    const readMeTemplate =

`# ${response.title}

## Table of Contents

1.[Inroduction ](#intro)
2.[Installation](#installation)
3.[Usage](#usage)
4.[License](#license)
5.[Contributors](#contributor)
6.[Tests](#tests)
7.[Questions](#questions)

  
})




//GIVEN a command-line application that accepts user input

// *user prompt with questions

//WHEN I am prompted for information about my application repository
// *

//Questions that need answers
    //Description, 
        //-answer.fdescription
    //Table of Contents, 
        //-when I click on the titles of the things, I am take nto that section
    //Installation, 
        //-answer
    //Usage, 
    //License, 
        // --list of options
        // --a badge for license is added to top of readme
        //-- a notice is added to the section of the readme license explaining which license 
    //Contributing, 
    //Tests
    //Questions
        //Github Username- link to profile
        //email - instructions on how to reach me

        //WRITE IT ALL TO A DOCUMENT
            // fs.writeFile()