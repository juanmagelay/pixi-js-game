import { Application, Graphics } from 'pixi.js';

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

    // Create a rectangle
    const rectangle = new Graphics();
    rectangle.rect( 100, 200, 30, 50 );
    rectangle.fill({
        color: 0xff0000,
        alpha: 0.5
    });
    rectangle.stroke({
        color: 0x0000ff,
        alpha: 0.8,
        width: 5
    })
    app.stage.addChild( rectangle );

    // Create a star
    const star = new Graphics();
    star.star( 200, 200, 5, 30, 70 );
    star.fill({
        color: 0x00ff00,
        alpha: 0.5
    });
    star.stroke({
        color: 0x0000ff,
        alpha: 0.8,
        width: 5
    })
    app.stage.addChild( star );

    // Create a triangle
    const triangle = new Graphics()
    triangle.poly([
        600, 50,
        720, 400,
        420, 400
    ]);
    triangle.fill({
        color: 0x8f5ff2
    });
    triangle.stroke({
        color: 0xf5fa2f
    });
    app.stage.addChild(triangle);

    // Create a circle
    const circle = new Graphics();
    circle.circle( 500, 300, 20 );
    circle.fill({
        color: 0x00ffff,
        alpha: 0.5
    });
    circle.stroke({
        color: 0xff00ff,
        alpha: 0.8,
        width: 5
    })
    app.stage.addChild( circle );

    // Create a line
    const line = new Graphics();
    line.moveTo( 20, 20 );
    line.lineTo( 80, 80 );
    line.stroke({
        color: 0x55faff,
        width: 10,
        alpha: 0.9
    });
    app.stage.addChild( line );

    document.body.appendChild(app.canvas);
} )();