
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle=60;
var ground1;
var ground;
var fan;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }
	   
	   var ground_options ={
		 isStatic: true
	   };

	ground1 = new Fan(50, 350, 100, 10);

	Engine.run(engine);

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	
   
	ground = Bodies.rectangle(100,400,650,20,ground_options);
	World.add(world,ground); 
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Engine.update(engine);
  
  ground1.show();
  
  angle += 1.0;


  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);

  drawSprites();
 
}



