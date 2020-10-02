const inquirer = require("inquirer")
const fs = require("fs")

function readMeGen() {
    


inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"What is the title of your Project?",
    },
    {
        type:"input",
        name:"description",
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
 
    const readMeTemplate =

`# ${response.title}

## Table of Contents

1.[Description ](#description)

2.[Installation](#installation)

3.[Usage](#usage)

4.[License](#license)

5.[Contributors](#contributor)

6.[Tests](#tests)

7.[Questions](#questions)

<br>

<a name="intro"></a>
## 1. Description
${response.description}

<a name="install"></a>
### 2. Installation
${response.installation}

<a name="usage"></a>
### 3. Usage
${response.usage}


<a name="license"></a>
### 4. License
${response.license}


<a name="contributors"></a>
### 5. Contributors
${response.contributions}


<a name="tests"></a>
### 6. Tests
${response.tests}

<a name="questions"></a>
### 7. Contact Information

GitHub Username: ${response.githubUsername}

GitHub Link: ${response.gitHubLink}

Email: ${response.email}`


const fileName = `${response.title.replace(/\s/g, '').toLowerCase()}.md`;

fs.writeFile(fileName, readMeTemplate, function(err){
    if(err) {
        return console.log(err);
    }
    console.log("success!");
    });



  
})


}

readMeGen()