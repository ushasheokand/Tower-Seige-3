
class Chain{
    constructor(body_A, point_B)
    {
        var options = {
            bodyA : body_A,
            pointB : point_B,
            stiffness : 0.1,        
            length : 0.1
        }
    
        this.chain = Constraint.create(options);
        this.pointB = point_B;
        World.add(world, this.chain);
    }
    display()
    {
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);        
            line(pointA.x, pointA.y , pointB.x , pointB.y);
        }
    }

    fly()
    {
        this.chain.bodyA = null;
    }

    attach(body)
    {
        this.chain.bodyA = body;
    }
}