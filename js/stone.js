class Stone{
    constructor(x,y,r){
     this.body = Bodies.circle(x , y , r, { restitution: 0.8}) 
     this.r = r
     World.add(world,this.body)
    }

    display(){
        push()
        ellipseMode(RADIUS);
        ellipse(this.body.position.x , this.body.position.y , 30 , 30)
        pop()
      
    }
}