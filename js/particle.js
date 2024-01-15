function Particle(){
  //position
  this.pos = createVector(random(width),random(height));
  //velocity
  //this.vel = p5.Vector.random2D();//random velocity
  this.vel = createVector(0,0);
  //acceleration
  this.acc = createVector(0,0);
  
  this.maxspeed = 10;
  
  this.prevPos = this.pos.copy();
  
  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed)
    this.pos.add(this.vel);
    this.acc.mult(0);//multiple 0, reset acc to 0
    
  }
  
  this.applyForce = function (force) {
    this.acc.add(force);
  }
  
  this.show = function (){
    stroke(0,random(255),0,12);
    //stroke(random(255),random(255),random(255));
    strokeWeight(2);
   // point(this.pos.x,this.pos.y);
    line(this.pos.x,this.pos.y,this.prevPos.x,this.prevPos.y)
    this.updatePrev();
     
  }
  this.follow = function(vectors){
    let x = floor(this.pos.x / scale);
    let y = floor(this.pos.y / scale);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force)
  }
this.updatePrev = function(){
  this.prevPos.x = this.pos.x;
  this.prevPos.y = this.pos.y;
}
  
  this.edges = function(){
    if(this.pos.x > width) {this.pos.x = 0;this.updatePrev();}
    if(this.pos.x < 0) {this.pos.x = width;this.updatePrev();}
    if(this.pos.y > height) {this.pos.y = 0;this.updatePrev();}
    if(this.pos.y < 0) {this.pos.y = height;this.updatePrev();}
     
  }
  
}