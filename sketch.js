let myXPos = 100;
let myYPos = 100;
let mySize;

let enemyXPos = 300
let enemyYPos = 300
let enemysize;

function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize = random(50, 100);
}

function draw() {
  background(0);

  fill(255,0,0);
  ellipse(enemyXPos, enemyYPos, enemySize, enemySize);
  
  fill(0,0,255);
  ellipse(myXPos, myYPos, mySize, mySize);

  let distance = dist (myXPos, myYPos, enemyXPos, enemyYPos)
 console.log(distance)
  
  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }
}
