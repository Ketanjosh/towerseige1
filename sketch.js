const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies; 
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16; 
var block17; 
var block18 
var block19; 
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;
var block27;
var block28;
var block29;
var block30;
var block31;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create(); world = engine.world;
    ground=new Ground(400,240,400,10)

    block8 = new Block(330,235,30,40)
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40)
    block11 = new Block(420,235,30,40)
    block12 = new Block(450,235,30,40)
    block13 = new Block(360,195,30,40)
    block14 = new Block(390,195,30,40)
   block15 = new Block(390,155,30,40)
    block16 = new Block(380,155,30,40)
    block17 = new Block(355,155,30,40)
    block18 = new Block(415,155,30,40)
    block19 = new Block(415,155,30,40)
    block20 = new Block(450,155,30,40)
    block21 = new Block(410,155,30,40)
    block22 = new Block(410,155,30,40)
    block23 = new Block(480,155,30,40)
    block24 = new Block(410,105,30,40)
    block25 = new Block(450,105,30,40)
    block26 = new Block(440,105,30,40)
    block27 = new Block(460,105,30,40)
    block28 = new Block(430,105,30,40)
    block29 = new Block(490,105,30,40)
    block30 = new Block(490,90,30,40)
    block31 = new Block(440,90,30,40)

}

function draw(){
    background(200)
    Engine.update(engine);
    text("Draw a Hexagon stone and release it, to launch to towards the rocks ", 280, 50);
    fill("purple")
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    fill("pink")
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
  block18.display()
   block19.display()
    block20.display()
    block21.display()
   block22.display()
    block23.display()
    block24.display()
    block25.display()
    block26.display()
    block27.display()
    block28.display()
    block29.display()
    block30.display()
    block31.display()



    ground.display()

}