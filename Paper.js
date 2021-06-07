

    class Paper{
        constructor(x,y,radius) {
          var options = {
              isStatic:false,
              'restitution':0.5,
              'friction':0.1,
              'density':1.2
          }
          this.body = Bodies.circle(x,y,radius,options);
          this.r = 70;
          this.image = loadImage("paper.png");
          World.add(world, this.body);
        }
        display(){
          var paperpos=this.body.position;		
    
                push()
                translate(paperpos.x, paperpos.y);
                fill("yellow")
          imageMode(CENTER);
          image(this.image, 0,0,this.r, this.r)
          //Image(this.image,0,0, this.r, this.r)
                pop()
        }
      };
      