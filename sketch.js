var bg,bg2,form,system,code,security;
var score=0;
var access1,check1,access2,check2,access3,check3
function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2=loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  // Add code to display score in the middle of the screen
  text("SCORE : "+score,495,20)
  // Add code to display the end screen
  if(score===3){
 clear();
 background(bg2)
 textSize(40)
 fill("black")
 text("TREASURE UNLOCKED",250,450)
  }

  drawSprites()
}