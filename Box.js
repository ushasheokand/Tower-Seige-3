class Box
{
    constructor(x,y,w,h , color)
    {
        var options= {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height= h; 
        this.color = color;
        this.image= loadImage("images/box.png");
        World.add(world , this.body);
        this.visibility = 255;
    }

    display()
    {
        var pos= this.body.position;
        var angle= this.body.angle;
       
 
        // In case boxes fall , they would cover some distance in the left or right. 
        if(this.body.speed > 8)
        {           
            World.remove(world, this.body);
            push(); 
            strokeWeight(0);
            this.visibility = this.visibility - 20;
            translate(pos.x,pos.y)
            rotate(angle);            
            tint(0, this.visibility); 
            image(this.image , 0,0 , 50,50);
            pop(); 
        }
        // Regular display
        else{
            push(); 
            strokeWeight(0);        
             
            translate(pos.x,pos.y)
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(2);
            stroke("white");
            fill(this.color);
            rect(0,0,this.width,this.height);
                      
            pop();
        }   

    }
    score()
        {
            if(this.visibility <0 && this.visibility > -1055 )
            score ++;
        }

}