counter = 0;
y = 30;
squareY = 20;

function setup() {
    createCanvas(700,300);
    background(255);
}

function draw() {

    while(counter < 25) {
        counter = counter + 1;
        fill(0);
        if(counter%3==0 && counter%5==0) {
            fill(0,0,225);
            square(counter*25-10,squareY, 20);
            noFill();
        } else if(counter%3==0) {
            fill(138,43,226);
            circle(counter*25,y,20);
            noFill();
        } else if(counter%5==0) {
            fill(0,255,0);
            square(counter*25-10,squareY,20);
            noFill();
        } else {
            fill(0);
            circle(counter*25, y, 20);
        }

    }

}
