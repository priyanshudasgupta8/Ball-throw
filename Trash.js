class Trash {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true,
            friction : 1,
            density : 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('Dustbin.png');

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image,1430,640,135,130);
        pop();
    }
}