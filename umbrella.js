
class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("Walking Frame/walking_1.png")
      this.body = Bodies.circle(x,y,10000,options);
     this.radius = 10000
      World.add(world, this.body);
    }
    display(){
        push()
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image,pos.x, pos.y,300,300);
     pop()
    }
  };


/*class Umbrella {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':1.0,
          'isStatic':true
      }
      
     // this.radius = radius
      this.image = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
      this.body = Bodies.circle(x, y, this.radius, options);
      this.radius= radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      push();

      
      imageMode(CENTER)
      fill("lightblue");
      image(this.image,pos.x, pos.y, this.radius,this.radius);
      pop();
    }

}*/


