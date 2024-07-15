const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'threeCharacters',
        message: 'Enter 3 characters of your choosing.'
    },
    {
        type: 'input',
        name: 'textHexadecimal',
        message: 'Enter the hexadecimal code for a color of your choosing for the three letters entered.'
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'What shape do you want for your logo?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeHexadecimal',
        message: 'Enter the hexadecimal code for a color of your choosing for the shape selected.'
    },
];

function generateSVG(answers) {
    const { threeCharacters, textHexadecimal, shapes, shapeHexadecimal } = answers;

    let shape;
    if (shapes === 'Circle') {
        shape = new Circle(shapeHexadecimal);
    } else if (shapes === 'Triangle') {
        shape = new Triangle(shapeHexadecimal);
    } else if (shapes === 'Square') {
        shape = new Square(shapeHexadecimal);
    }

    const shapeSVG = shape.render();
    const textSVG = `<text x="150" y="100" fill="${textHexadecimal}" font-size="40" text-anchor="middle" alignment-baseline="middle">${threeCharacters}</text>`;

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shapeSVG}
                ${textSVG}
            </svg>`;
}

inquirer.prompt(questions).then(answers => {
    const svgContent = generateSVG(answers);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
});