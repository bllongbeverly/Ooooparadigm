const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

const questions = [
  {
  type: 'input',
  name: 'color',
  message: 'Provide a color?',
  },
  {
  type: 'input',
  name: 'text',
  message: 'provide a description:',
  },
  {
  type: 'list',
  name: 'shape',
      message: 'Which shape do you want to use for your project?',
  choices: ["circle", "triangle","square"],
  },
  {
      type: 'input',
      name: 'logoColor',
      message: 'What is you logo color?',
  },]

class CLI {
  run() {
    inquirer.prompt(questions).then(answers => {
      
      console.log(answers); 
    

      writeFile("test.svg","update later", err => {
        if (err) {
        console.error(err);
          return;
        }
        console.log('');
      });  
    });
    
  }
}

module.exports = CLI;
