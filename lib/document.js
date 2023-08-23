const svgCircle = `<circle cx="100" cy="65" r="60" stroke="green" stroke-width="4" FILL_TEXT />`;
const svgSquare = `<rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="FILL_TEXT;stroke:black;stroke-width:5;opacity:0.5" />`
const svgTriangle = `<polygon points="100 0, 0 200, 200 200" "FILL_TEXT />`

function createDocument(shapes, shapesColor, text, textColor) {
  let svgShape = "";
  if (shapes === "Circle") {
    svgShape = svgCircle
    svgShape = svgShape.replace('FILL_TEXT', `fill="${shapesColor}"`)
  } else if (shapes === "Square") {
    svgShape = svgSquare
    svgShape = svgShape.replace('FILL_TEXT', `fill:${shapesColor}"`)
  } else if (shapes === "Triangle") {
    svgShape = svgTriangle
    svgShape = svgShape.replace('FILL_TEXT', `fill="${shapesColor}"`)
  } else throw new Error("shape is required");



  return `<!DOCTYPE html>
  <html>
  <body>
  
  <svg height="150" width="500">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"
        style="stop-color:rgb(255,255,0);stop-opacity:1" />
        <stop offset="100%"
        style="stop-color:rgb(255,0,0);stop-opacity:1" />
      </linearGradient>
    </defs>
    ${svgShape}
    <text fill="${textColor}" font-size="45" font-family="Verdana"
    x="50" y="86">${text}</text>
  Sorry, your browser does not support inline SVG.
  </svg>
  
  </body>
  </html>
  `;
};

module.exports = { createDocument };
