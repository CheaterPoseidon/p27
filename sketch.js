var bob1,bob2,bob3,bob4,bob5
var roof
var rope1,rope2,rope3,rope4,rope5
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
	bob1=new Bob(150,300,30)
	bob2=new Bob(210,300,30)
	bob3=new Bob(270,300,30)
	bob4=new Bob(330,300,30)
	bob5=new Bob(390,300,30)
	roof=new Roof(270,100,240,20)
	rope1=new Rope(bob1.body,roof.body,bob1.diameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  drawSprites();
 
}



