var paperBall,ground,chain,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	dustbinGreenIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	paperBall = new PaperBall(100,420,90,90);

	chain = new Chain(paperBall.body,{x:200, y:50});

	dustbin1 = new Dustbin1(880,345,20,290);
	dustbin2 = new Dustbin2(1080,340,20,300);
	dustbin3 = new Dustbin3(980,480,200,20);
	

	dustbinGreen=createSprite(980,340, 10,10);
	dustbinGreen.addImage(dustbinGreenIMG)
	dustbinGreen.scale=0.9

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  paperBall.display();
  ground.display();

 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 drawSprites();
}

function keyPressed(){
if(keyCode === 38 ){
	Matter.Body.setStatic(paperBall.body,false);
	Matter.Body.setAngularVelocity(paperBall.body,4);
	
	chain.fly();
}

}
