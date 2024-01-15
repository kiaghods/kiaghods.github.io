let cols,rows;
let scale = 30;
let inc = 0.1;
let zoff = 0;//3D perlin noise 
let zoff2 = 0;
let particles = [];
let flowfield;

function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeSketch();
}

function initializeSketch() {
  cols = floor(width / scale);
  rows = floor(height / scale);

  flowfield = new Array(cols * rows);

  particles = [];
  for (let i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initializeSketch(); // Reinitialize your sketch variables
}


function sn(){
    for (let y2=0;y2<rows;y2++){
    for(let x2=0;x2<cols+40;x2++){
      let angle2 = random(zoff2,TWO_PI);
      let v2 = p5.Vector.fromAngle(angle2);
      v2.setMag(10);
      stroke(0,0,255,1);          
      push();     
      translate(x2*500,y2*500);
      rotate(v2.heading());
      strokeWeight(4);
      line(0,0,30,0);
      pop();      
    }
  zoff2 += 0.003
  }
  stroke(255,0,0,50)
  point(random(width),random(height/3+100))
}

function axon(){
  let yoff = 0;
    for (let y=0;y<rows;y++){
  let xoff = 0;
    for(let x=0;x<cols+40;x++){
      let index = x + y * cols;
      //let r = noise(xoff,yoff) * 255;
      let angle = noise(xoff,yoff,zoff) * PI/2 * -3;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(4);
      flowfield[index] = v;
      xoff +=inc;
      stroke(0,50);  
//       push();      
//       translate(x * scale, y * scale);
//       rotate(v.heading());
//       strokeWeight(1);
//       line(0,0,scale,0);      
//       //translate(x * scale, 0);
//       //line(0,0,scale,height+100);
//       //line(0,0,scale,0);
//       pop();
      
    }
  yoff += inc;
  zoff += 0.0003
  }
  
  for(let i=0;i<particles.length;i++){
  particles[i].follow(flowfield);
  particles[i].update();
  particles[i].edges();
  particles[i].show();
  
  }
}

function draw() {
  axon();
  sn();
}