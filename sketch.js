var paper1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  paper1 = new Paper(10,10,30)

  
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	leftside = createSprite(830,513,15,80)
  leftside.shapeColor=color("white")

	rightside = createSprite(960,513,15,80)
	rightside.shapeColor=color("white")
	
	downside = createSprite(900,545,140,15)
	downside.shapeColor=color("white")

	//Create the Bodies Here.
	Engine.run(engine);
  
  downbody =Bodies.rectangle(900,545,150,20,{isStatic:true} );
    World.add(world, downbody)
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Engine.update(engine)
  paper1.display();
  drawSprites();
 
}
 
function keyPressed() {
  if (keyCode === UP_ARROW) {
     // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
 
   }
 }


