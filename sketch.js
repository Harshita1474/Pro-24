
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbinSide1,dustbinSide2,dustbinSide3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	

	
	dustbinSide1=new Dustbin(500,610,20,100);
	dustbinSide2=new Dustbin(700,610,20,100);

  dustbinSide3=createSprite(600,650,200,20);
  dustbinSide3.shapeColor=color(0);
  
    ground=new Ground(400,670,800,20);
    paperObject=new Paper(100,650,width,height);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  paperObject.display();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();
  ground.display();}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:30,y:-30});
}
}