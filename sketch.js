let angle = 6.1;
let angleV = 0;
let angleA = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
}

let holdA = 0;

function mousePressed() {
  angle = TWO_PI+ createVector(mouseX-200, mouseY-200).heading();
  holdA = angle + TWO_PI;  
  angleV = 0;
}
function mouseDragged() {
  angle = TWO_PI + createVector(mouseX-200, mouseY-200).heading();
}

function mouseReleased() {
  let newAngle = TWO_PI+ createVector(mouseX-200, mouseY-200).heading();
  angleV = -1*(newAngle-holdA) * 0.05;
}

function draw() {

  // angleA = map(mouseX, 0, width, -0.01, 0.01);
  // angleV = constrain(angleV, -0.2, 0.2);


  background(0);
  translate(200, 200);
  
  let i = 0;
  for (let a = 0; a < TWO_PI; a += PI / 5) {
    noFill();
    stroke(255);
    strokeWeight(2);
    let ang = angle % TWO_PI;
    if (ang >= a && ang <= a + PI/5) {
      fill(255, 50);
    }
    arc(0, 0, 400, 400, a, a + PI / 5, PIE);
    i++;
  }


  noStroke();
  fill(random(255), random(255), random(255));
  rectMode(CENTER);
  rotate(angle);
  rect(0, 0, 256, 16);
  triangle(128, -32, 128, 32, 172, 0);
  rect(-128, 0, 32, 48);
  fill(random(255), random(255), random(255));
  ellipse(0, 0, 8, 8);


  angle += angleV;
  // angleV += angleA;
  angleV *= 0.98;

}
