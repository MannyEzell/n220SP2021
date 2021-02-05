function setup() {
    createCanvas(400,300);
    background(0);
}

function draw() {
    background(0);
    circle(mouseX, mouseY, 150);

    if(mouseX > 200) {
        fill(155,0,0);
        circle(mouseX, mouseY, 150);

    }
    if(mouseX < 200) {
        fill(0,0,155);
        circle(mouseX,mouseY,150);
    }
}