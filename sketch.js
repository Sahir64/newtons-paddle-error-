
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

   roof = new Roof(800,110,60,60); 
}


function draw() {
  rectMode(CENTER);
  background(0);


  roof.display();
  
  drawSprites();
 
}

