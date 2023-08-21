const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document.js");

class CLI {
  constructor() {
    this.shapes = "";
    this.shapesColor = "";
    this.text = "";
    this.textColor = "";
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "shapes",
          message: "Select desired shape",
          choices: ["Square", "Circle", "Triangle"],
        },
        {
          type: "input",
          name: "shapesColor",
          message: "Enter desired color for shape",
        },
      ])
      .then(() => {
        return this.inputText();
      })
      .then((shapes, shapesColor) => {
        this.addShape(shapes, shapesColor);
      });
  }

  inputText() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Enter 3 letters for logo generation",
        },
        {
          type: "input",
          name: "text-color",
          message: "Enter desired color for text",
        },
      ])
      .then((answers) => console.log(answers));
  }
}

module.exports = CLI;
