class RedBox extends Box {
    constructor(x, y) {
        super(x, y, 40, 60);
    }

    display() {
        if (this.body.speed < 3) {

            super.display();
        }
        else {
            push();
            var pos=this.body.position;
            World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            fill("red");
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }
    }

}

  