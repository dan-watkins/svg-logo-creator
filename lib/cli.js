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
        {
          type: "input",
          name: "text",
          message: "Enter 3 letters for logo generation",
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter desired color for text",
        },
      ])
      .then(() => {
        return (
          writeFile("/../output/", "output", null, "shapes.html"),
          createDocument(
            this.shapes,
            this.shapesColor,
            this.text,
            this.textColor
          )
        );
      });
  }
}

module.exports = CLI;
