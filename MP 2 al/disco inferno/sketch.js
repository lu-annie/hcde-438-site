let x, y, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  r = random(255);
  g = random(150);
  b = 0;
  x = random(width);
  y = random(height);
  noStroke()
  fill(r, g, b, 30);
  circle(x, y, r);
}