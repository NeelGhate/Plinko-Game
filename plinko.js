class Plinko {
    constructor(x,y,r){
      var options = {
          isStatic : true,
          restitution : 1,
          density : 0.8,
          friction : 0
      }
      this.x = x;
      this.y = y;
      this.r = 10;
      this.body = Bodies.circle(x,y,10,options);
      
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      push();
      translate (pos.x, pos.y);
      fill(232,42,254);
      ellipse(0,0,10,10);
      pop();
      }
  }