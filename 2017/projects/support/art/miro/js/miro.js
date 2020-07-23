function setup(){
  createCanvas(windowWidth,windowHeight);
  background(38,115,202);
  noStroke();
  noLoop();
}

function draw(){
  createBase();
  createPaint();
  createLine();
  createEllipses();
}

function createBase(){
  var interA;
  var from = color(38,115,202);
  var to = color(89,185,236);
  xoff = 0;

  for (var b = 0; b < windowHeight; b++) {
     xoff = xoff + 1;
     var n = noise(xoff);   
     noFill();
     var interA = lerpColor(from, to, n);  
     stroke(interA);
     line(0,b,windowWidth,b);
   }
}

function createPaint(){
  var x1, y1;
  var x2, y2;
  var x3, y3;
  var x4, y4;
  
  var interB;
  var from = color(38,115,202);
  var to = color(89,185,236);
  var xoff = 0;
  var num = 10;

  for (var a = 0; a < num; a++){
    x1 = random(-200,windowWidth/2+200);
    y1 = random(-200, windowHeight+200);
   
    x2 = x1 + 60;
    y2 = y1 + random(-20,30);
   
    x3 = x1 + random(900,windowWidth); //length
    y3 = y1 + random(-200,300); //direction
   
    x4 = x3 - 60;
    y4 = y3 + random(-30,20);

    var rand = random(180,300);
   
    for(var i = 0; i <= rand; i++) {
       xoff = xoff + 1;
       var n = noise(xoff);   
       noFill();
       strokeWeight(1);
       var interB = lerpColor(from, to, n);  
       bezier(x1, y1+i, x2, y2+i, x3, y3+i, x4, y4+i);
       stroke(interB, 150);  
    }
   }
}

function createLine() {
  strokeWeight(1);
  stroke(30);
  noFill();

  beginShape(); 
  var xoff1 = 0;
  var yoff1 = 0;
  var x6 = 0.0;

  for (var y6 = 0; y6 <= windowHeight+200; y6 += 30) {
    x6 = map(random(xoff1, yoff1), 0, 8, windowWidth-300,windowWidth-200); 
    vertex(x6-(y6/5), y6); 
    yoff1 += 0.08; 
  }  
  endShape();
}

function createEllipses(){
  var circles = 4;

  for (var e = 0; e < circles; e++) {
    var ex = random(100, width/2-100);
    var ey = random(100, height-100);
    var r = random(20,40);
     
    fill(30,100);    
    for (var blur = 0; blur < 10; blur++){  
      stroke(30,150-(15*blur));
      strokeWeight(4*blur);
      ellipse(ex,ey,r,r);
    }
   } 
  
  for (var a = 0; a < circles; a++) {     
    var ex = random(width/2, width-100);
    var ey = random(100, height-100);
    var r = random(40,50);
     
    fill(30,100);
    for (var blur = 0; blur < 10; blur++){  
      stroke(30,150-(15*blur));
      strokeWeight(6*blur);
      ellipse(ex,ey,r,r);
    }
   } 

   var lx = random(130,width/2);
   var ly = random(50, height/2);
  
   for (var blur = 0; blur < 5; blur++){  
     stroke(242, 0, 26, 130-(20*blur));
     strokeWeight(20+(9*blur));
     line(lx, ly, lx+90, ly-50); 
   }
     
   stroke(242, 0, 26);
   strokeWeight(20);
   line(lx, ly, lx+90, ly-50); 
}

function mouseClicked() {
  redraw();
  return false;
}

