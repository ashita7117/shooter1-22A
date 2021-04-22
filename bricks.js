class Brick {
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction': 1,
            'density': 1,
        }
        this.body = Bodies.rectangle(x,y,width,height)
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        rect(0,0,width,height);
        pop();
    }
}