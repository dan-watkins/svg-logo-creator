const Logo = require("./logo.js");

class Shapes extends Logo {
  constructor(shapes, ShapesColor) {
    super(shapes, ShapesColor);
    this.shapes = shapes;
    this.shapesColor = shapesColor;
  }
  addShape(shapes, shapesColor) {
    this.shapes.push(shapes, shapesColor);
  }
}

module.exports = Shapes;
