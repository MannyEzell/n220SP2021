//ball properties
let ball = {
    x : 50,
    y : 50, 
    r : 15, 
    color1 : [255, 255, 255], 
//update function for draw
    update: function() {
        fill(this.color1);
//ball velocity 
        ball.x += 5;
        ball.y += 5;
        circle(this.x, this.y, this.r);
    }
}
//main setup
function setup(){
    createCanvas(800, 600);
    background(0);
}

function draw() {
    background(0);
    ball.update();
    ball.x = ball.x + this.x;
    ball.y += 5;

    if (ball.x > 785){
        this.x * -1;
    }
}

    function collision(this.x, circleY) {

    var colliding = false;

    if ((circleX < 785) && (circleX > 15)) {
         
        if ((circleY < 585) && (circleY > 15)) {
            colliding = true;
        }
    }
    return colliding;
}