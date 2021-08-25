const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1,wall2,wall3;
var bridge;
var stones = [];
var link;
var bg_img;
var jointPoint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall1 = new Base(25,200,400,100)
  wall2 = new Base(width-40,200,400,100)
  wall3 = new Base(width/2,height-20,1300,20)
  bridge = new Bridge(17 , { x : 150 , y : 150})
  stone = Bodies.circle(800,200,15, { density : 0.001})
  jointPoint = new Base(1100, 200, 70, 20);
  Matter.Composite.add(bridge,jointPoint)
  link = new Link(bridge, jointPoint);
  imageMode(CENTER)
  for(i = 0 ; i <= 8 ; i++){
    var x = random(width / 2 - 200 , width / 2 + 300 )
    var y = random(-10 , 140)
    var stone = new Stone(x , y , 80 , 80)
    stones.scale = 0.2
    stones.push(stone)
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  wall1.display();
  wall2.display();
  wall3.display();
  bridge.show();
  
  for (var stone of stones) {
   stone.display();
  }
}
