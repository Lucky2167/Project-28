const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world,rect1,rect2,paper,ground,launch;

function preload(){
bgimg=loadImage("aryan.jpg");
}

function setup() {
	createCanvas(1200, 690);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,665,2000,24);
	
	rect1 = new Dustbin(770,650,200,20);
	rect2 = new Dustbin(700,650,20,175);
	
	
	paper = new Paper(50,610,17);
	launch= new SlingShot(paper.body,{x:150,y:150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimg);
  
  paper.display();
  ground.display();
  rect1.display();
  launch.display();

  
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
launch.fly();
}	