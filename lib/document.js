const svgCircle = `<circle cx="90" cy="70" r="60" FILL_TEXT />`;
const svgSquare = `<rect x="20" y="20" width="150" height="150" style="FILL_TEXT />`;
const svgTriangle = `<polygon points="100 0, 0 200, 200 200" style="FILL_TEXT />`;

function createDocument(shapes, shapesColor, text, textColor) {
  let svgShape = "";
  if (shapes === "Circle") {
    svgShape = svgCircle;
    svgShape = svgShape.replace("FILL_TEXT", `fill="${shapesColor}"`);
  } else if (shapes === "Square") {
    svgShape = svgSquare;
    svgShape = svgShape.replace("FILL_TEXT", `fill:${shapesColor}"`);
  } else if (shapes === "Triangle") {
    svgShape = svgTriangle;
    svgShape = svgShape.replace(
      "FILL_TEXT",
      `fill:${shapesColor};stroke:${shapesColor};stroke-width:1"`
    );
  } else throw new Error("shape is required");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
       width="200" height="150">
    ${svgShape} 
    <text fill="${textColor}" font-size="45" font-family="Verdana" x="50" y="86">${text}</text>
  </svg>
  `;
}

module.exports = { createDocument };
