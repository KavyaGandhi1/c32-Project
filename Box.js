class Box{
    constructor(x,y,width,height){
      var options = {
          density:1,
          friction: 0.3,

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
      this.Visibility = 255;

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed<3){
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        pop();  
        }

        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility-5;
        pop();
            
        }
        

       
       
    }
     
    score(){
        if(this.Visibility<0 && this.Visibility>-105){
            score++;
        }
    }
}