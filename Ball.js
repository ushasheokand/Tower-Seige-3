class Ball
{
    constructor(x,y,r)
    {
        var options= {
            isStatic : false,
            restitution : 0,
            friction : 0.5,
            density : 5
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.radius = r;       
        this.image= loadImage("images/polygon.png");
        World.add(world , this.body);
    }

    display()
    {
        var pos= this.body.position;
        var angle= this.body.angle; 
 
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image , 0,0, this.radius,this.radius);
        pop();

    }
}