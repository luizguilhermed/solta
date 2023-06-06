class Fan { 
 constructor(x, y, w, h, color) {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  } 

  show(){
    var pos = this.body.position;

    Body.rotate(this.body, angle)
    angle += 0.1;
  
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop()
  }

}