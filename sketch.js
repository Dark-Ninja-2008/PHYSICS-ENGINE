const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ball1,ground;



function setup() {
  createCanvas(400,400);
  
  engine= Engine.create();
  world= engine.world;
  var ball1_options = {
    restitution: 1.0
  }
  ball1= Bodies.circle(200,200,10,ball1_options);
  World.add(world,ball1);
  console.log(ball1);
  console.log(ball1.position.x);
  console.log(ball1.position.y);
  
  var ground_options = {
    isStatic:true
  }
  ground= Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
}

function draw() {
  background("lightblue"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,50,50);
}