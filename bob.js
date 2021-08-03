class bob {
  constructor(x, y, radius) {
    var options = {
      restitution: 0.7,
      isStatic: false,
      friction: 0.5,
      density: 1.2,
    };

    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
    this.radius = radius;
  }
  display() {
    push();
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius);
    pop();
  }
}
