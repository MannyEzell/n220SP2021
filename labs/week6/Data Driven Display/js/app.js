//object = disc
let disc = {
    x: 50,
    y: 50,
    r: 150,
    color1: [235,231,209],
    color2: [0, 0, 0],
    update: function() {
        fill(this.color1);
        circle(mouseX, mouseY, this.r),
        fill(this.color2);
        circle(mouseX, mouseY, this.r/7.5);
    }
}

function setup() {
    createCanvas(400,300);
    background(0);
}


function draw(){
    background(0);
    disc.update();
}