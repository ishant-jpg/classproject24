var dostbinobj,parerobj,groundobj,world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	dostbinobj=new dostbin(1200,650)
 paperobj=new paper(200,450,40)
 groundobj=new groundobj(width/2,670,width,20);

	//Create the Bodies Here.
    var render=Render.create({
		element: document.body,
		engine:engine,
		options:{
	    width:1200,
	    height:700,
		wireframes:false
		}
	})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinobj.display();
  paperobj.display();
  groundobj.display();
  drawSprites();
 
}
function keyPressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForse(paperobj.body,paperobj.body.position,{x:85,y:-85});
    }
}



