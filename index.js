//GLOBAL VARIABLES
let particles = [];
//create an object to hold the Kinect data

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  const particlesLength = window.innerWidth*window.innerWidth; //number of Particles is 3 times width of the window

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}
let counter = 0;
function draw() {
  background(0);

  let mousePos = createVector(mouseX, mouseY); //replace with Kinect data

  for(let i =0; i < counter; i++) {
   
    particles[i].update();
    particles[i].draw();
  };

}

function mouseClicked()
{
  counter ++;
}

class Particle {

  constructor() {
    this.pos = createVector(100, 100);
    this.size = random(1, 2);
    this.color = random(100, 255); //define how see thru each particle is
    this.vel = createVector(random(-1, 1), random(-1, 1))
    this.acc = createVector(0, random(-0.1, 0.1)); //set the acceleration of each particle
 //set the mass of each particle to be the same as its size 
  }

  //Draw a single Particle
  draw() {
    noStroke();
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.size);

  }

  //Particle rises or falls and bounces off the edges
  update() {
    this.pos.add(this.vel); //add velocity to the x, y positions to make it move
    this.vel.add(this.acc); //add acceleration to the velocity to mimic physics
    // Detect edges on update
    this.detectEdges();
  }

  detectEdges() {
    // If the Particle touches the left or right edges of the canvas,
    // it will reverse direction.
    if(this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    // If the Particle touches the top or bottom edges of the canvas,
    // it will reverse direction.
    if(this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

}