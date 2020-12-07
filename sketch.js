const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine,world;
var drops = []

function preload(){
    thunder1 = loadImage("thunderbolt/1.png")
    thunder4 = loadImage("thunderbolt/1.png")
    thunder3 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/1.png")
    dot = loadImage("dot.png")
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
 
   
    boy = new Umbrella(600,300)
   
    
}

function draw(){
     background(0)
    Engine.update(engine);
    boy.display()

   help()
      console.log(frameCount)
     
     drawSprites()   
}   
function help(){
    if(frameCount % 1 === 0){
       var raindrop = createSprite(random(0, 1200), -200,10,10);
     
       
        raindrop.addImage(dot)
        raindrop.scale = 0.1
        raindrop.velocityY = 3
    raindrop.lifetime = 700
        drops.push(raindrop);
      }

      if(frameCount % 50 === 0){
          thunder = createSprite(random(0, 1000), 20,10,10)
          thunder.lifetime = 40
          //thunder.addImage(thunder1||thunder2||thunder3||thunder4)
          thunder.scale = 0.5
          var rand = Math.round(random(1,6));
   
          switch(rand) {
            case 1:  thunder.addImage( thunder1);
                    break;
            case 2:  thunder.addImage( thunder2);
                    break;
            case 3:  thunder.addImage( thunder3);
                    break;
            case 4:  thunder.addImage( thunder4);
           
            default: break;
          }
      }
}

