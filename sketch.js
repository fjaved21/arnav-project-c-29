const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2;
var box,box2,box3,box4,box5;
var box6,box7,box8,box9;
var sprite;
var box10,box11,box12,box13,box14;
var box16,box17,box18,box19,box20





function setup() {
  createCanvas(800,400);
  //background("black");
  engine = Engine.create();
  world = engine.world;



  ground= new Ground(400,380,250,20);
  ground2 = new Ground(600,200,150,20);
  ground3 = new Ground(50,220,100,10);
  ground3.visible=false;
  box =new Box(300, 345, 50, 50);
  box2 =new Box(350, 345, 50, 50);
  box3 =new Box(400, 345, 50, 50);
  box4 =new Box(450, 345, 50, 50);
  box5 =new Box(500, 345, 50, 50);
  box5 =new Box(500, 345, 50, 50);

  box6 =new Box(320, 300, 50, 50);
  box7 =new Box(370, 300, 50, 50);
  box8 =new Box(420, 300, 50, 50);
  box9 = new Box(470,300,50,50);

  box10 = new Box(340,255,50,50);
  box11 = new Box(390,255,50,50);
  box12 = new Box(440,255,50,50);
  box13 = new Box(390,105,50,50);

  box14 = new Box(600,10,30,50);
  box15 = new Box(630,10,30,30);
  box16 = new Box(550,20,30,10);
  box17 =  new Box(650,50,30);
  box18 = new Box(550,5,30,50);
  box19 = new Box(600,20,40,40);
  box20 = new Box(550,1,50,60);



  
/*
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
imageMode(CENTER)
//Image(polygon_img , polygon.position.x,polygon.position.y,40,40);
*/


ball = new Ball(50,200,20);

 slingshot = new SlingShot(ball.body,{x:100,y:200});
  



  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("white");
 // background(255,255,255);  
 Engine.update(engine);

  ground.display();
  ground2.display();
  ground3.display();
  slingshot.display();  
  box.display();  
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



  
  ball.display();

 



  drawSprites();
}


function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
 // gameState = "launched";
}


  
