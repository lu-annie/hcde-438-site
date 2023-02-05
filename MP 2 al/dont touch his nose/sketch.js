let song;
let img;
let img2;

function preload() {
  img = loadImage('sully.png');
  img2 = loadImage('iceage.jpeg');
}

function setup() {
  song = loadSound('movie_1.mp3');
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0 );
  img.resize(650,600);
}

function draw() {
  
  

  if ((mouseX > 250) && (mouseX < 350) &&
    (mouseY > 175) && (mouseY < 225)) {
    image(img2, 0, 0)
    img2.resize(650, 600)
    song.play()
  } else {
    image(img, 0, 0);
  }
  noFill();
  noStroke();
  rect(250, 175, 100, 50);
  fill(0);
  text("Don't Touch His Nose", 240, 35);
}
