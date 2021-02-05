xPos = 400;
yPos = 300;
velocityX = 3;
velocityY = 3;

function setup() {
    createCanvas(800,600);
    background(0);
}
function draw() {
    background(0);
    circle(xPos,yPos,150);
    xPos = xPos + velocityX;
    yPos = yPos + velocityY;

    if (xPos > 725) {
        velocityX = velocityX*-1;
    }
    
    if (yPos > 525) {
        velocityY = velocityY*-1;
    }

    if (xPos < 75) {
        velocityX = velocityX*-1;
    }

    if (yPos < 75) {
        velocityY = velocityY*-1;

    }

    console.log(yPos);
}