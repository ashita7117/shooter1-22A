class Sling{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA :bodyA,
            bodyB :bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.sling = Constrain.create(options)
        World.add(world,this.sling)
    }
    display(){
        var pointA =  this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(2);
        var a1x = pointA.x;
        var a1y = pointA.y;
        var a2x = pointB.x;
        var a2y = pointB.y;
        line(a1x,a1y,a2x.a2y)
    }
}