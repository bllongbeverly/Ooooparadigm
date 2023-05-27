const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

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
  },
]

class CLI {
  run() {
    inquirer.prompt(questions).then(answers => {
      
      console.log(answers); 
    
      const ourSVG = new SVG();

      let shape;
      if (answers.shape === 'circle') {
        shape = new Circle();
      } else if (answers.shape === 'triangle') {
        shape = new Triangle();
      } else {
        shape = new Square();
      }

      shape.setColor(answers.color);
      
      const renderedShape = shape.render();
      
      ourSVG.addElement(renderedShape);
      ourSVG.addElement(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.logoColor}">${answers.text}</text>`)

      ourSVG.renderToFile('test.svg')

    });
    
  }
}

module.exports = CLI;
