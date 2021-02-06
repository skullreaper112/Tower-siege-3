class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.5,
      'friction': 0.6,
      'density': 1.0,
      //isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

    this.visibility = 255;

  }
  display() {
    var pos = this.body.position;
    push();
    if (this.body.speed < 3) {
 
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      fill("yellow");

    }
    else{
  World.remove(world,this.body);
  this.visibility=this.visibility-5;
  tint(255,this.visibility);
  rect(pos.x, pos.y, this.width, this.height);
  pop();
    }
  }
}