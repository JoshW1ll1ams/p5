let grid;
const scale = 5;
const rows = 100;
const cols = 100;

function setup() {
  createCanvas(rows * scale, cols * scale);
  grid = createGrid();
}

function draw() {
  background(255);

  // update and render the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].update();
      grid[i][j].render();
    }
  }
}

function createGrid() {
  // create a 2D array of particles
  let grid = new Array(rows);
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Particle(i * scale, j * scale);
    }
  }
  return grid;
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.color = color(255, 0, 0); // set color to red
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    // apply gravity
    this.applyForce(createVector(0, 0.1));

    // update velocity and position
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // reset acceleration
    this.acc.mult(0);

    // check if particle has reached the bottom
    if (this.pos.y >= height - scale) {
      this.vel.mult(0); // stop moving
    }
  }

  render() {
    fill(this.color);
    rect(this.pos.x, this.pos.y, scale, scale);
  }
}