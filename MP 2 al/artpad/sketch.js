let colorPicker;
let eraser;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  text('Press any key to erase', 60, 20);
    colorPicker = createColorPicker('#000000');
    colorPicker.position(0, 0)
}


function draw() {
  stroke(colorPicker.color());
  if (mouseY>50 === true) {
    if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
    else if (keyIsPressed === true) { 
          noStroke();
          fill('white');
          ellipse(mouseX,mouseY,30,30);
  }
  } 
}