class Polygon{
    constructor(x,y){
     var options = {
         density: 1,
         isStatic: false,
         restitution:0.3,
         friction: 0.3
     }
     this.body = Bodies.circle(x,y,40,options);
     this.r = 40;
    this.img = loadImage("polygon.png");
    World.add(world,this.body);
    }

    
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.img,0,0,this.r,this.r);
    pop();
    }
}

