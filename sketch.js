const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constrain = Matter.Constrain;

var engine,world

function setup(){
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    line1 = new Line(500,400,100,2);
    line2 = new Line(900,200,100,2)
    ball0 = new Ball(200,300,40,40)
    sling0 = new Sling(ball.body,200,0,0);
}

function draw(){
    background("Black");
    Engine.update(engine);

    line1.display();
    line2.display();
    ball0.display();
    sling0.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball0.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}