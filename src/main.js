import { 
    Application, 
    Graphics, 
    Text, 
    TextStyle, 
    Sprite, 
    Assets 
} from 'pixi.js';

import { initDevtools } from '@pixi/devtools';

( async () => {
    const app = new Application();
    await app.init({
        resizeTo: window,
        
        // Set the background color to yellow and the alpha value
        backgroundAlpha: 0.4,
        backgroundColor: 0xffea00
    });

    // Initialize devtools
    initDevtools( { app } );
    
    // Delete the margin around the canvas
    app.canvas.style.position = 'absolute';

    // Create a text style
    const style = new TextStyle({
        fill: 0xff0033,
        fontFamily: "VT323",
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        stroke: { color: '#4a1850', width: 5 },
        dropShadow: {
            color: '#4a1850',
            blur: 4,
            angle: Math.PI / 6,
            distance: 6
        },
        wordWrap: true,
        wordWrapWidth: 20
    });

    // Create a text 1
    const text1 = new Text({
        text: 'Hola soy Juan',
        style,
        position: { x: 200, y: 20 }
    });
    app.stage.addChild( text1 );

    // Create a text 2
    const text2 = new Text({
        text: 'y mi apellido es Gelay',
        style,
        position: { x: 280, y: 20 }
    });
    app.stage.addChild( text2 );

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

    // Tick to animate the triangle
    app.ticker.add( () => {
        
        // Clear previous drawing
        triangle.clear();

        // Generate three random points (x,y) for the triangle
        const screenWidthDividedBy3 = app.screen.width / 3;
        const screenHeightDividedBy3 = app.screen.height / 3;
        
        const x1 = Math.random() * screenWidthDividedBy3;
        const y1 = Math.random() * screenHeightDividedBy3;
        const x2 = Math.random() * screenWidthDividedBy3;
        const y2 = Math.random() * screenHeightDividedBy3;
        const x3 = Math.random() * screenWidthDividedBy3;
        const y3 = Math.random() * screenHeightDividedBy3;

        // Draw triangle path
        triangle.poly([
            x1, y1,
            x2, y2,
            x3, y3
        ]);

        triangle.fill({
            color: 0x000000
        });

        triangle.stroke({
            color: 0xf5fa2f
        });

        app.stage.addChild(triangle);
    });

    // Ticker max FPS
    app.ticker.maxFPS = 20;

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

    // Move the circle with click

    circle.eventMode = 'static';
    circle.cursor = 'pointer';
    circle.on('pointerdown', moveLeft);

    function moveLeft() {
        circle.x -= 10;
    }
    
    // Load an image and create a sprite
    const texture = await Assets.load('/public/images/Renegade_Kick_1.png');
    const sprite1 = Sprite.from(texture);
    const sprite2 = new Sprite (texture);
    app.stage.addChild(sprite1, sprite2);
    sprite1.position.set( 400, 300 );
    sprite2.position.set( 600, 300 );
    sprite1.width = 100;
    sprite1.height = 200;
    sprite2.scale.x = 2;
    sprite2.scale.y = 2;
    sprite1.skew.set( Math.PI/4, 0 ); // 45 degrees skew on x axis
    sprite2.rotation = Math.PI / 4; // 45 degrees rotation
    sprite2.anchor.set( 0.5, 0.5 ); // Set the anchor point to the center   


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