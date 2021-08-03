const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var brick;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  brick = new Roof();

  b1diameter = 50;
  b1 = new bob(260, 500, 30);
  b2 = new bob(320, 500, 30);
  b3 = new bob(380, 500, 30);
  b4 = new bob(440, 500, 30);
  b5 = new bob(500, 500, 30);
  rope1 = new rope(b1.body, brick.body, -160, 0);
  rope2 = new rope(b2.body, brick.body, -80, 0);
  rope3 = new rope(b3.body, brick.body, 0, 0);
  rope4 = new rope(b4.body, brick.body, 80, 0);
  rope5 = new rope(b5.body, brick.body, 160, 0);
  Engine.run(engine);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  brick.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

  text("PRESS THE LEFT ARROW KEY", 310, 580);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(b1.body, b1.body.position, { x: -275, y: -75 });
  }
}
