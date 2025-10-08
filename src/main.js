import { Application } from 'pixi.js';

( async () => {
    const app = new Application();
    await app.init({
        resizeTo: window,
        
        // Set the background color to yellow and the alpha value
        backgroundAlpha: 0.4,
        backgroundColor: 0xffea00
    });
    
    // Delete the margin around the canvas
    app.canvas.style.position = 'absolute';

    document.body.appendChild(app.canvas);
} )();