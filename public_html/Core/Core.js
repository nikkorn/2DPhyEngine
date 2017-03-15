var gEngine = gEngine || {};

gEngine.Core = (function(){
    var mCanvas     = document.getElementById("canvas");
    var mContext    = mCanvas.getContext("2d");
    var mWidth      = 800;
    var mHeight     = 450;
    var mAllObjects = [];

    var mAllObjects = [];

    return { mAllObjects, mContext, mWidth, mHeight };
}());