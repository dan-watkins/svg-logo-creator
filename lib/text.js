const Logo = require("./logo.js");

class Text extends Logo {
  constructor(text, textColor) {
    super(text, textColor);
    this.text = text;
    this.textColor = textColor;
  }
  addText(text, textColor) {
    this.text.push(text, textColor);
  }
}

module.exports = Text;
