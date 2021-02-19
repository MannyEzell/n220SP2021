let velocity = 3
let xPosition = [700, 700]
let yPosition = [600, 600]

function setup() {
    createCanvas(650,550);
    background(10)

}

function mousePressed(){
    fill(255);
    circle(100,100,40);

    xPosition.push(mouseX);
    xPosition.shift();
    yPosition.push(mouseY);
    yPosition.shift();
}

function draw(){
    background(10);

    for(i = 0; i < yPosition.length; i++ ) {
        circle(xPosition[i], yPosition[i], 40);

        yPosition[i] = yPosition[i]+velocity;
    }

}
