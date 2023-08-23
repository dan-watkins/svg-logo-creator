const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document.js");

class Logo {
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
      .then((answers) => {
        this.shapes = answers.shapes;
        this.shapesColor = answers.shapesColor;
        this.text = answers.text;
        this.textColor = answers.textColor;
        return writeFile(
          join(__dirname, "..", "output", "logo.svg"),
          createDocument(
            this.shapes,
            this.shapesColor,
            this.text,
            this.textColor
          )
        );
      })
      .then(() => console.log("created file"))
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Logo;
