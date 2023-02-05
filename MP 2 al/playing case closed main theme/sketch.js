// The midi notes of a scale
let notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78];

let img;

function preload() {
  img = loadImage('conan.gif');
}
// For automatically playing the song
let index = 0;
let song = [
  { note: 8, duration: 150, display: "D" },
  { note: 7, duration: 250, display: "G" },
  { note: 5, duration: 400, display: "A" },
  { note: 12, duration: 800, display: "B" },
  { note: 8, duration: 150, display: "C" },
  { note: 5, duration: 250, display: "D" },
  { note: 7, duration: 350, display: "G" },
  { note: 13, duration: 450, display: "G" },
  { note: 12, duration: 200, display: "G" },
  { note: 10, duration: 800, display: "G" },
  { note: 8, duration: 150, display: "G" },
  { note: 10, duration: 250, display: "G" },
  { note: 8, duration: 150, display: "G" },
  { note: 10, duration: 250, display: "G" },
  { note: 12, duration: 450, display: "G" },
  { note: 8, duration: 150, display: "G" },
  { note: 7, duration: 250, display: "G" },
  { note: 5, duration: 400, display: "G" },
  { note: 10, duration: 550, display: "G" },
  { note: 8, duration: 175, display: "G" },
  { note: 7, duration: 500, display: "G" },
  { note: 5, duration: 125, display: "G" },
  { note: 7, duration: 125, display: "G" },
  { note: 8, duration: 400, display: "G" },
  { note: 5, duration: 550, display: "G" },
  { note: 12, duration: 400, display: "G" },
  { note: 8, duration: 550, display: "G" },
  { note: 10, duration: 400, display: "G" },
  { note: 17, duration: 450, display: "G" },
  { note: 15, duration: 500, display: "G" },
  { note: 13, duration: 125, display: "G" },
  { note: 12, duration: 125, display: "G" },
  { note: 10, duration: 125, display: "G" },
  { note: 12, duration: 900, display: "G" },
];
let trigger = 0;
let autoplay = false;
let osc;

function setup() {
  createCanvas(windowWidth, windowHeight-25);
  image(img, 10, 10, 50, 50)
  let button = createButton("PLAY CASE CLOSED THEME");
  button.mousePressed(function() {
    if (!autoplay) {
      index = 0;
      autoplay = true;
    }
  });

  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {

  // If we are autoplaying and it's time for the next note
  if (autoplay && millis() > trigger){
    playNote(notes[song[index].note], song[index].duration);
    trigger = millis() + song[index].duration;
    // Move to the next note
    index ++;
  // We're at the end, stop autoplaying.
  } else if (index >= song.length) {
    autoplay = false;
  }


  // Draw a keyboard

  // The width for each key
  let w = width / notes.length;
  for (let i = 0; i < notes.length; i++) {
    let x = i * w;
    let noteHue = map(x,0, width, 0, 360)
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      // If we're clicking
      if (mouseIsPressed) {
        fill(noteHue, 70, 70);
      // Or just rolling over
      } else {
        image(img, 0, 0, windowWidth, windowHeight)
      }
    } else {
      fill(255);
    }

    // Or if we're playing the song, let's highlight it too
    if (autoplay && i === song[index-1].note) {
      fill(noteHue, 70, 70);
    }

    // Draw the key
    rect(x, 0, w-1, height-1);
  }
  

}

// When we click
function mousePressed(event) {
  if(event.button == 0 && event.clientX < width && event.clientY < height) {
    // Map mouse to the key index
    let key = floor(map(mouseX, 0, width, 0, notes.length));
    playNote(notes[key]);
  }
}

// Fade it out when we release
function mouseReleased() {
  osc.fade(0,0.5);
}
