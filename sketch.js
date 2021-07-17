const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;

function preload() {

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  blower_mouth = new BlowerMouth(250,320,160,20);
  blower = new Blower(380,290,150,130)
  ball = new Ball(380,-200.0,20,20);

  button=createImg("assets/cut_button.png");
  button.position(520,300);
  button.size(50,50);
  button.mouseClicked(blow);

}

function draw() {
  background("black");
  Engine.update(engine);

  blower_mouth.show();
  blower.show();
  ball.show();

  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.003});
}
