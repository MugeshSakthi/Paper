
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

    paper = new Paper(610,50,25);
	
	ground = new Ground(400,600,800,20);

	leftDustbin = new Dustbin(550,540,20,100);
	bottomDustbin = new Dustbin(610,580,100,20);
	rightDustbin = new Dustbin(670,540,20,100);
	
	Engine.run(engine);

}


function draw() {
rectMode(CENTER);

background(0);

Engine.update(engine);

paper.display();
ground.display();
leftDustbin.display();
bottomDustbin.display();
rightDustbin.display();

}


