class Paper {
    constructor(x, y) {
      var options = {
          restitution:0.8,
          friction:0.3,
          density:1.0
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill(255);
      ellipse(0, 0, this.radius);
      pop();
    }
  };