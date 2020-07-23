var x = 0;
var y = 0;
let xspeed = 1;
let yspeed = 1;
let r = 100;

var ellipsesvg;

function preload(){
  ellipsesvg = loadImage("/images/circle.svg");	
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  r = width/4;
  noStroke();
}

function draw() {
  background(236,235,241);
  imageMode(CENTER);
  image(ellipsesvg, x,y,r*2,r*2);
  
  x += xspeed;
  y += yspeed;

  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0,255,0);
}