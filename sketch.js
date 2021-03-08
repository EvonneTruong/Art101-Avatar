let flapCape;
"use strict"
let antennaMove = -10;
let value = 100
let fall = []

function setup() {

  createCanvas(400, 400);
  angleMode(DEGREES);
//class
  //(x,y,size,rotate)
   for (let i = 0; i <= 4; i++){
    fall[i] = new Fall(random(1,7)/10 * width, random(1,10)/10 * height, random(9) * .4, random(360));
  }

}

function draw() {
  //colors
  bg1 = color(164, 207, 180); //purple
  bg2 = color(135, 144, 175) //blue

  flapCape = map(mouseX, 0, 400, 362, 388)


  back();
for (i = 0; i <= fall.length - 1; i++){
  fall[i].display();
    fall[i].move();
  
  glowball();
  drawbody();
  drawcapeleft(flapCape); //angle rotation
  drawcaperight(-flapCape); //angle rotation use negatives
  mousePress();
  drawbigantenna(antennaMove); //angle rotation
  drawsmolantenna(antennaMove); //angle rotation
  drawhead();
  draweyes();
  drawpupils();
  
    

}

function mousePress() {
  //console.log("mouse beep");
  // if the position of the mouse in inside then do this"
  if (mouseX > width * .7 && mouseX < width * .9 && mouseY > width * .1 && mouseY < width * .3) {
    console.log("mouse beepin here");
    antennaMove = -antennaMove;
  }
}


function back() {
  fill(value)
  //135, 150, 175 
  rect(0, 0, width)

}

function mouseClicked() {
  if (value === bg2) {
    value = bg1;
  } else {
    value = bg2;
  }
}

function glowball() {
  noStroke();
  fill(210, 185, 233, 200) // purple
  circle(width * .8, width * .2, width * .2)
  fill(255, 255, 255, )
  circle(width * .8, width * .2, width * .1, )
}

function drawbody() {
  //body circle
  noStroke(0);
  fill(255, 255, 255)
  circle(width * .5, width * .75, width * .5);
}

function drawcapeleft(rotationLeft) {
  //cape left
  push();
  translate(width * .5, height * .5);
  rotate(rotationLeft);
  fill(195, 228, 248)
  beginShape();
  vertex(width * .0, height * .0);
  vertex(width * -.3, height * .1);
  vertex(width * -.35, height * .39);
  vertex(width * -.05, height * .275);
  endShape(CLOSE);
  pop()
}

function drawcaperight(rotationRight) {

  //cape right

  push();
  translate(width * .5, height * .5);
  rotate(rotationRight)
  fill(195, 228, 248)
  beginShape();
  vertex(width * .0, height * .0);
  vertex(width * .3, height * .1);
  vertex(width * .35, height * .39);
  vertex(width * .05, height * .275);;
  endShape(CLOSE);
  pop()
}

function drawbigantenna(antennarotate) {
  //antenna 1 
  push();
  translate(width * .4, height * .3);
  rotate(antennaMove)
  fill(195, 228, 248);
  beginShape();
  vertex(width * -.29, height * -.19);
  vertex(width * -.2, height * -.2);
  vertex(width * .0, height * .0);
  vertex(width * -.28, height * -.1);
  endShape(CLOSE)
  pop();
}

function drawsmolantenna(antennarotate) {
  //antenna 2 
  push();
  translate(width * .275, height * .29)
  rotate(antennaMove)
  beginShape();
  fill(195, 228, 248)
  vertex(width * -.075, height * .025);
  vertex(width * .0, height * .0);
  vertex(width * -.09, height * -.032);
  endShape(CLOSE);
  pop();
}

function drawhead() {
  //head circle
  fill(255, 255, 255);
  noStroke(0);
  circle(width * .5, width * .4, width * .46);
}

function draweyes() {
  //eyes blue
  //195, 228, 248
  fill(195, 228, 248)
  circle(width * .39, width * .4, width * .15)
  circle(width * .6, width * .4, width * .15)

}

function drawpupils() {
  //eyes pupil
  fill(210, 185, 233)
  circle(width * .39, width * .4, width * .08)
  circle(width * .6, width * .4, width * .08)
}
}