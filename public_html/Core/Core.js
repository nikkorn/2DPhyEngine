var gEngine = gEngine || {};

gEngine.Core = (function(){
    var mCanvas     = document.getElementById("canvas");
    var mContext    = mCanvas.getContext("2d");
    var mWidth      = 800;
    var mHeight     = 450;
    mCanvas.height  = mHeight;
    mCanvas.width   = mWidth;

    var mAllObjects = [];

    var updateUIEcho = function () {
        document.getElementById("uiEchoString").innerHTML =
                "<p><b>Selected Object:</b>:</p>" +
                "<ul style=\"margin:-10px\">" +
                "<li>Id: " + gObjectNum + "</li>" +
                "<li>Center: " + mAllObjects[gObjectNum].mCenter.x.toPrecision(3) + "," + mAllObjects[gObjectNum].mCenter.y.toPrecision(3) + "</li>" +
                "</ul> <hr>" +
                "<p><b>Control</b>: of selected object</p>" +
                "<ul style=\"margin:-10px\">" +
                "<li><b>Num</b> or <b>Up/Down Arrow</b>: Select Object</li>" +
                "</ul> <hr>" +
                "<b>F/G</b>: Spawn [Rectangle/Circle] at random location" +
                "<hr>";
    };

    var draw = function () {
        // Paint over whole canvas to clear.
        mContext.clearRect(0, 0, mWidth, mHeight);
        // Draw all objects.
        for (var i = 0; i <mAllObjects.length; i++) {
            mContext.strokeStyle = "blue";
            if (i === gObjectNum)
                mContext.strokeStyle = "red";
            mAllObjects[i].draw(mContext);
        }
    };

    var runGameLoop = function () {
        requestAnimationFrame(function () { runGameLoop() });
        updateUIEcho();
        draw();
    };

    return { 
        initialiseEngineCore: function () { runGameLoop() }, 
        mAllObjects, 
        mContext, 
        mWidth, 
        mHeight 
    };
}());

var runGameLoop = function () {
    requestAnimationFrame(function () { runGameLoop() });
    updateUIEcho();
    draw();
};