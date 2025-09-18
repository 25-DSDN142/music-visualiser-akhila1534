let startColor;
let endColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startColor = color(255, 87, 69); // Reddish-orange
  endColor = color(194, 37, 196); // Purple
  noLoop(); // Only need to draw the background once
}

function draw() {
  // Top to bottom gradient
  for (let y = 0; y < height; y++) {
    // Calculate interpolation factor between 0 and 1
    let inter = map(y, 0, height, 0, 1);
    // Interpolate between the two colors
    let currentColor = lerpColor(startColor, endColor, inter);
    // Set the stroke color
    stroke(currentColor);
    // Draw a horizontal line
    line(0, y, width, y);
  }
}