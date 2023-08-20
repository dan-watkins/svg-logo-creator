const inquirer = require("inquirer");

class CLI {
  constructor() {
    this.shape = "";
    this.image = "";
    this.text = "";
    this.logo = "";
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "shape",
          message: "Select desired shape",
          choices: ["Square", "Circle", "Triangle"],
        },
        {
          type: "input",
          name: "shape-color",
          message: "Enter desired color for shape",
        },
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
