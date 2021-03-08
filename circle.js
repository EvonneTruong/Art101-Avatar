class Fall {
  constructor(_xPos, _yPos, _size, _rotation) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size
       this.rotation = _rotation
  }

  display() {
    push();
    scale(this.size);
    
    translate (this.xPos, this.yPos)
    rotate(this.rotation)
    //to create the image
   
    noStroke();
    
    //small antenna
    beginShape();
    fill(195, 228, 248,150)
    vertex(width * -.08, height * .025);
    vertex(width *- .015, height * -.0);
    vertex(width * -.09, height * -.032);
    endShape(CLOSE);

    //big antenna
    
    fill(195, 228, 248,150);
    beginShape();
    vertex(width * -.19, height * -.14);
    vertex(width * -.13, height * -.15);
    vertex(width * .0, height * -.05);
    vertex(width * -.16, height * -.07);
    endShape(CLOSE)

    
    //head
    fill(255, 255, 255,150);
    circle(width * .08, width * .0, width * .25);
//eye
    fill(210, 185, 233,150);
    circle( width * .025,width * .0, width * .07)
    fill(210, 185, 233,150);
    circle(width * .14,width * .0, width * .07)
    pop();
  }

move(){
  this.rotation ++ ;
  
  if (this.yPos <= height * 1.15){
  //this.yPos + this.yPos + number
   // this.yPos += (Math.random()+.5) ;
        this.yPos += 2;
} else {
  this.yPos =- height * 1.;
}
}
  //end of function
}