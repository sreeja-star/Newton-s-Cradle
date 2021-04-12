
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,300,230,20);
	bob1 = new bob(320,530,40)
	bob2 = new bob(360,530,40)
	bob3 = new bob(400,530,40)
	bob4 = new bob(440,530,40)
	bob5 = new bob(480,530,40)
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
	rope5=new rope(bob5.body,roofObject.body,80, 0)
	
	Engine.run(engine);
	
  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bob1.body,bob1.body.position,
								{x:-50,y:-45});
	
		  }
	}
function draw() {
  rectMode(CENTER);
  background("yellow");
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();

  fill("purple");
  textSize(30)
  stroke("black")
  text("Press 'UP_ARROW'to see how it works ",150,700);
  
  textSize(40);
  fill("purple");
  stroke("LightPurple")
  strokeWeight(2);
  text("NEWTONS'S CRADLE",200,200)

  
 
}






