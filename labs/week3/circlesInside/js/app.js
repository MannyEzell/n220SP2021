let i = 0;

function setup(){
    createCanvas(400,300);
    background(100);
}

function draw(){
    background(100);
    //noFill();

    for(var i = 20; i > 0; i--){

        stroke(255 - (i*15));
        circle(200, 150, i*15);
    }
}