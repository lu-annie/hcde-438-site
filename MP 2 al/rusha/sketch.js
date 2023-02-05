function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(255);
  noStroke();
  rect(0,0, windowWidth, windowHeight/3);
  fill(28, 53, 120);
  rect(0, windowHeight/3, windowWidth, windowHeight/3);
  fill(228, 24, 28);
  rect(0, 2/3*windowHeight, windowWidth, windowHeight/3);
}