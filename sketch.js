let bgImg,girlImg,girl,snow1
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world

function preload(){
bgImg=loadImage("snow1.jpg")
girlImg=loadImage("little-girl.jpg")
}



function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  girl=createSprite(400, 200, 50, 50);
  girl.addImage(girlImg)
  girl.scale=0.2

  snow1= new Snow(200,10)
}

function draw() {
  background(bgImg);  
  drawSprites();

  snow1.display();
}