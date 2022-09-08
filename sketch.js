var gameState = 1;
var play = 1;
var end = 0;
var score = 0;

var alice, aliceImage;

var bunny;
var bunnyAnimation;

var card1;
var car1Img;
var car2;
var card2Img;
var card3;
var card3Img;
var card4;
var card4Img;
var cardGroup;

var clock1;
var clock1Img;
var clock2;
var clock2Img;
var clockGroup;

var backgroundalice;
var backgroundbunny;

function preload()
{
  aliceImage = loadAnimation("run1a.png", "run2a.png");
}




function setup() 
{
  createCanvas(windowWidth, windowHeight);

  cardGroup = new Group();
  clockGroup = new Group(); 
}




function draw() 
{
  background(255);

  alice = createSprite(100, windowHeight/2);
  alice.addAnimation("moving", aliceImage);
  alice.scale = 0.2;

  
  textSize(25);
  text("Score:" + score, windowWidth - 150, 50);

  drawSprites();
}