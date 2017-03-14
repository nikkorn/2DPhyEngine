
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
        context.strokeRect(Math.random() * width * 0.8,
            Math.random() * height * 0.8,
            Math.random() * 30 + 10, Math.random() * 30 + 10);
    }

    // Create a random circle on the press of the 'G' key.
    if (keyCode === 71) {
        context.beginPath();
        context.arc(Math.random() * width * 0.8,
            Math.random() * height * 0.8,
            Math.random() * 30 + 10, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
    }
}
