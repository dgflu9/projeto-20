
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, cubo, retangulo;

function preload()
{
	
}

function setup() {
	createCanvas(800, 635);

	var ball_options = {
		restitution: 0.5,
		frictionAir:0.02

	}

	var ground_options ={
		isStatic: true
	  };

	 var cubo_options = {
		 restitution: 0.7,
		 friction: 0.01,
		 frictionAir: 0.1,
	 }

	 var retangulo_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3,
	}
	
     
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	ball = Bodies.circle(220,10,50,ball_options);
	World.add(world,ball);

	ground = Bodies.rectangle(200,645,400,20,ground_options);
  World.add(world,ground);

  cubo = Bodies.rectangle(110,50,10,10,cubo_options);
  World.add(world,cubo);
    
  retangulo = Bodies.rectangle(350,50,100,75,retangulo_options);
  World.add(world,retangulo);

	Engine.run(engine);

	rectMode(CENTER);
	
}


function draw() {
	Engine.update (engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(51);
  
  ellipse(ball.position.x,ball.position.y,50);

  rect(ground.position.x,ground.position.y,1200,20);

  rect(cubo.position.x,cubo.position.y,75,75);

  rect(retangulo.position.x,cubo.position.y,175,75);

  drawSprites();
 
}



