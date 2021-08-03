class Roof{
constructor(){
    this.body = Bodies.rectangle(width/2, 10, width, 20 , {isStatic:true} );
    World.add(world, this.body);
}

display(){
rectMode(CENTER)
fill("blue")
rect(this.body.position.x,this.body.position.y,width,20)
}
}