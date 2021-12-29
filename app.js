//const fs = require('fs');
const inquirer = require('inquirer');
console.log(inquirer)
//const generatePage = require ('./src/page-template.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ]);
};

promptUser().then(answers => console.log(answers));

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};
//const profileDataArgs = process.argv.slice(2);
// const pageHTML = generatePage(name, github);
//   fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });