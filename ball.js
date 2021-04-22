class Ball{
    constructor(x,y,width,height){
        var options={
            'restitution': 0.8,
            'friction': 1,
            'density': 1,
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("polygon.png");
        World.add(world,this.body)
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imgMode(CENTER);
        image(this.image,0,0,width,height)
        pop();
    }
}