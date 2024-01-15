let myFountain;

function customParticleDraw(fountain, particle) {
    // Define how each particle should be drawn
    fill(255, 150); // Example: white color with some transparency
    ellipse(particle.location.x, particle.location.y, particle.partSize, particle.partSize);
    // Additional drawing logic (like color change over time) can be added here
  }  

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let particleDefinition = {
    name: "test",
    colors: ["blue", "purple", "white"],
    shape: "ellipse",
    lifetime: 255,
    angle: [250, 290],
    size: [2, 8],
    rate: [2, 10],
    speed: 2,
    gravity: 0.1
  };

  // Create a new Fountain object
  myFountain = new Fountain(null, particleDefinition);
  Fountain_display("customShape", customParticleDraw); // Register the custom drawing function
}

    function draw() {
        background(0); // Typically a dark background for better visibility
      
        // Run the particle system
        myFountain.Draw();
        myFountain.Step();
      }
