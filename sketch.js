const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16;
var polygon1;
var sling;
var backgroundImg;
var bg  = "morning.jpg";
var score  = 0;

function preload(){
    getBackgroundImg();
}

function setup(){
    createCanvas(1000,700);
engine = Engine.create();
world = engine.world;

ground1 = new Ground(500,690,1000,30);
ground2 = new Ground(600,450,180,20);
ground3 = new Ground(900,350,180,20);

box1 = new Box(575,425,30,30);
box2 = new Box(590,425,30,30);
box3 = new Box(605,425,30,30);
box4 = new Box(620,425,30,30);
box5 = new Box(580,400,30,30);
box6 = new Box(595,400,30,30);
box7 = new Box(610,400,30,30);
box8 = new Box(585,375,30,30);
box9 = new Box(600,375,30,30);
box10 = new Box(595,350,30,30);

box11 = new Box(865,325,30,30);
box12 = new Box(880,325,30,30);
box13 = new Box(895,325,30,30);
box14 = new Box(870,300,30,30);
box15 = new Box(885,300,30,30);
box16 = new Box(875,275,30,30);

polygon1 = new Polygon(190,420);

sling = new SlingShot(polygon1.body,{x: 190,y:400});

Engine.run(engine);

}

function draw(){
    if(backgroundImg)
background(backgroundImg);

textSize(20);
fill(247,9,53);
text("SCORE: "+ score,800,50);
ground1.display();
ground2.display();
ground3.display();
box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();

box11.display();
box11.score();
box12.display();
box12.score();
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
box16.display();
box16.score();

polygon1.display();
sling.display();
//console.log(mouseY);
}

function mouseDragged(){
 
       Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
    
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon1.body);
        Body.setPosition(polygon1.body,{x:190,y:420});
    }
}

   async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON  = await response.json();
    console.log(response);
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if(hour>=06 && hour<=18){
        bg = "morning.jpg";
    }
    else{
        bg = "night.jpeg";
    }
    backgroundImg = loadImage(bg);
}
