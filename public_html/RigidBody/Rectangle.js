var Rectangle = function (center, width, height) {
    RigidBody.call(this, center);
    this.mType   = "Rectangle";
    this.mWidth  = width;
    this.mHeight = height;

    // 0:TopLeft 1:TopRight 2:BottomRight 3:BottomLeft
    this.mVertex    = [];
    this.mVertex[0] = new Vec2(center.x - width / 2, center.y - height / 2);
    this.mVertex[1] = new Vec2(center.x + width / 2, center.y - height / 2);
    this.mVertex[2] = new Vec2(center.x + width / 2, center.y + height / 2);
    this.mVertex[3] = new Vec2(center.x - width / 2, center.y + height / 2);

    // 0:Top 1:Right 2:Bottom 3:Left
    // Normal of faces toward outside of the rectangle.
    this.mFaceNormal    = [];
    this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);
    this.mFaceNormal[0] = this.mFaceNormal[0].normalise();
    this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
    this.mFaceNormal[1] = this.mFaceNormal[1].normalise();
    this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
    this.mFaceNormal[2] = this.mFaceNormal[2].normalise();
    this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
    this.mFaceNormal[3] = this.mFaceNormal[3].normalise();
};

var prototype         = Object.create(RigidBody.prototype);
prototype.constructor = Rectangle;
Rectangle.prototype   = prototype;
