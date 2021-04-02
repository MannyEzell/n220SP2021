 //circle posistion defined
 circleX = 150;
 circleY = 150;
 //rectangle position defined
 rectX = 350;
 rectY = 420;
 rectW = 150;
 rectH = 50;
 //circle velocity defined
 velocityX = 3;
 velocityY = 3;


function setup(){
    createCanvas(800,600);
    background(0);
    collideRect(150, 150, 350, 420, 150, 50);
    console.log(collideRect());

}

function draw(){
    background(0);
    circle(circleX, circleY, 50);
    rect(rectX, rectY, rectW, rectH);
    
    circleX = circleX + velocityX;
    circleY = circleY + velocityY;

    if (collideRect(circleX, circleY, rectX, rectY, rectW, rectH)) {
        velocityY = velocityY * - 1;
    }

}

//collision for Rectangle
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if ((circleX > rectX) && (circleX < rectX + rectW)) {

        if ((circleY > rectY) && (circleY < rectY + rectH)) {

              colliding = true;

        }

   }

   return colliding;
}

