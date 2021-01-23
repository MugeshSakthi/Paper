
class Paper {

constructor(x,y,radius){

  var options = {

    isStatic:false,
    restitution:0.2,
    friction:0.3,
    density:1.0

  }

this.body = Bodies.circle(x,y,radius);
this.radius = radius
World.add(world,this.body);
}
display(){
   ellipseMode(RADIUS);

    fill(rgb(212,155,75));
    

    circle(this.body.position.x,this.body.position.y,this.radius);
}    


}