var px = 250;
var py = 250;
var pmove = 5;

var phh = 150;
var phy = 300;
var phmove = 6;

var t1x = 100;
var t1y = 100;

var t2x = 400;
var t2y = 100;

function setup() {
  createCanvas(575, 500);
}

function draw() {
  background(0);
  
  field();
  player();
  
  if (mouseX>500) {
  phy = phy + phmove;
    phh = phh - phmove;
  }
  
  playerHealth();
}

function player() {
  	fill (255);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(px, py, 20,20);

  { //WASD
    if (keyIsDown(UP_ARROW)) {
   	py = py - pmove;
   } else if (keyIsDown(DOWN_ARROW)) {
   	py = py + pmove;
	 } else if (keyIsDown(LEFT_ARROW)) {
   	px = px - pmove;
   } else if (keyIsDown(RIGHT_ARROW)) {
   	px = px + pmove;
   }
    
    } // WASD
  }

function field() {
	noFill();
  strokeWeight(20);
  stroke(255);
  rectMode(RADIUS);
  rect(250,250,180,180);

  if (px+20 > 430) {
  	px = px - pmove;
  } else if (px-20 < 70) {
  	px = px + pmove;
  } else if (py+20 > 430) {
  	py = py - pmove;
  } else if (py-20 < 70) {
  	py = py + pmove;
  }
  
}

function playerHealth() {
  rectMode(CORNER);
  noStroke();

  fill(100);
  rect(500, 0, 75, 500);
  
  fill(255, 0, 0);
  rect(525, 300, 25, 150);

  fill(0, 255, 0);
  rect(525, phy, 25, phh);

  
  if (phh <= 0) {
    phh = 0;
    phy = 450;

    fill(255, 0, 0);
    textSize(30);
    textFont("Comic Sans MS");
    textAlign(CENTER);
    text('GAME OVER', 250, height / 2);
    textSize(15);
    text('Press "r" To Restart', 255, (height / 2) + 30);
    //text('or "m" to go to Menu', 255, (height / 2) + 50);
    
  }

}

function keyPressed() {

  if (key == "r") {
  	phh = 150;
    phy = 300;
  }
}