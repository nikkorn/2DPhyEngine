var gObjectNum = 0;

/**
 * Process keyboard input.
 * @param event
 */
function userControl(event) {
    var keyCode;

    if (window.event) { // For IE
        keyCode = event.keyCode;
    } else if (event.which) { // For firefox and opera and others
        keyCode = event.which;
    }

    // Get the canvas information.
    var width   = gEngine.Core.mWidth;
    var height  = gEngine.Core.mHeight;
    var context = gEngine.Core.mContext;

    // Create a random rectangle on the press of the 'F' key.
    if (keyCode === 70) {
        var r1 = new Rectangle(new Vec2(Math.random() * width * 0.8, Math.random() * height * 0.8),
            Math.random() * 30 + 10, Math.random() * 30 + 10);
    }

    // Create a random circle on the press of the 'G' key.
    if (keyCode === 71) {
        var r1 = new Circle(new Vec2(Math.random() * width * 0.8, Math.random() * height * 0.8),
            Math.random() * 10 + 20);
    }

    // Select object index.
    if (keyCode >= 48 && keyCode <= 57) {
        if (keyCode - 48 < gEngine.Core.mAllObjects.length)
            gObjectNum = keyCode - 48;
    }
    if (keyCode === 38) { // up arrow
        if (gObjectNum > 0)
            gObjectNum --;
    }
    if (keyCode === 40) { // down arrow
        if (gObjectNum < gEngine.Core.mAllObjects.length - 1)
            gObjectNum ++;
    }
};
