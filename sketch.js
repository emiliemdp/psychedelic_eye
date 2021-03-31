function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
}

function draw() {
  background(0, 5);
  rectMode(CENTER);
   
  
  translate(width /2, height /2);
  rotate(frameCount / 0.001);

  push();
  noFill();
  stroke(255, 0, 0);
  rect(0, 0, windowWidth, windowHeight);
  pop();

  push();
  noFill();
  stroke(55, 66, 250);
  rect(0, 0, windowWidth/4, windowHeight/4);
  pop();
}
