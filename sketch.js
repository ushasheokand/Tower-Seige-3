
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5, box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;

var ground, ground1, ground2, ball, chain;

var score=0;


function setup() {
	createCanvas(1000, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Ball(100,300,60);
    
    ground = new Ground(500,600,1000,10);
	
    ground1 = new Ground(720,275,250,10);
    ground2 = new Ground(320,400,200,10);

    box1 = new Box(630, 235,30,40, "cyan");
    box2 = new Box(660, 235,30,40, "cyan");
    box3 = new Box(690, 235,30,40, "cyan");
    box4 = new Box(720, 235,30,40, "cyan");
    box5 = new Box(750, 235,30,40, "cyan");
    box6 = new Box(780, 235,30,40, "cyan");
    box7 = new Box(810, 235,30,40, "cyan");

    box8 = new Box(660, 195,30,40, "pink");
    box9 = new Box(690, 195,30,40, "pink");
    box10 = new Box(720, 195,30,40, "pink");
    box11 = new Box(750, 195,30,40, "pink");
    box12 = new Box(780, 195,30,40, "pink");
    
    box13 = new Box(690, 155,30,40, "lightblue");
    box14 = new Box(720, 155,30,40, "lightblue");
    box15 = new Box(750, 155,30,40, "lightblue");

    box16 = new Box(720 , 115 , 30,40 , "lightgrey"); 


    box17 = new Box(260, 370,30,40, "pink");
    box18 = new Box(290, 370,30,40, "pink");
    box19 = new Box(320, 370,30,40, "pink");
    box20 = new Box(350, 370,30,40, "pink");
    box21 = new Box(380, 370,30,40, "pink");

    box22 = new Box(290, 330,30,40, "lightblue");
    box23 = new Box(320, 330,30,40, "lightblue");
    box24 = new Box(350, 330,30,40, "lightblue");

    box25 = new Box(320, 290,30,40, "lightgrey");
    	// create constraint object
	chain = new Chain(ball.body, {x:100, y:300});
	Engine.run(engine);

}

function draw() {
  
    background(255);
    
    Engine.update(engine);
  
    textSize(20);
    stroke(0);
    text("Score : " + score , 100,100);
    ball.display();
    chain.display();  

    ground.display();
    ground1.display();
    ground2.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display(); 

    box25.display();

    ground.display();
    ground1.display();
    ground2.display();
    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();

    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();

    box13.score();
    box14.score();
    box15.score();

    box16.score();

    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();

    box22.score();
    box23.score();
    box24.score(); 

    box25.score();
   
}

function keyPressed()
{
    Matter.Body.setPosition(ball.body , {x: 100 , y:300});
    chain.attach(ball.body);
}

function mouseDragged()
{	 
	Matter.Body.setPosition(ball.body , {x: mouseX , y:mouseY});
}

function mouseReleased()
{ 
    chain.fly();
}