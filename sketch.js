var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustb1, dustb2, dustb3;
var paper;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(1530, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, y, width, 10 , {isStatic:true} );
	//World.add(world, ground);
	 
	dustb1 = new Trash(1370,640,10,125);
	dustb2 = new Trash(1490,640,10,125);
	dustb3 = new Trash(1430,685,110,10);

	paper = new Paper(100,300,35,35);

	ground = new Ground(width/2,700,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

  dustb1.display();
  dustb2.display();
  dustb3.display();

  paper.display();

  ground.display();

  keyPressed();
  
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position,{x:5, y:-5.75});

	}
	if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position,{x:5,y:5.75});

	}
}
