var Circle = function (center, radius) {
    RigidShape.call(this, center);
    this.mType   = "Circle";
    this.mRadius = radius;
    // The vecor used to identify the rotation of the circle.
    this.mStartPoint = new Vec2(center.x, center.y - radius);
};

var prototype         = Object.create(RigidShape.prototype);
prototype.constructor = Circle;
Circle.prototype      = prototype;

Circle.prototype.draw = function (context) {
    context.beginPath();
    // Draw the circle.
    context.arc(this.mCenter.x, this.mCenter.y, this.mRadius, 0 , Math.PI * 2, true);
    // Draw our starting line to show rotation.
    context.moveTo(this.mStartPoint.x, this.mStartPoint.y);
    context.lineTo(this.mCenter.x, this.mCenter.y);
    context.closePath();
    context.stroke();
};
