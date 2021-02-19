let colorsArray = ["#51eddb", "#f78be7"];
let arrayY = [15, 105, 215, 81, 345];
let arrayX = [50, 250, 550, 750, 950 ];
posY = 0 

console.log(colorsArray[0]);
function setup() {
    createCanvas(1000,500);
    background(colorsArray[0]);
}
//draw circle in center
function draw() {
    background(colorsArray[0]);

    for(var i = 0; i < arrayY.length; i++ ) {
        fill(colorsArray[1]);
        posY++;
        circle(arrayX[i], posY, 50);
        if(arrayY <= 500){
            arrayY[i]= arrayY[i]-5;
        }
    }
    if(posY >= 475) {
        posY = 0;
    }
    console.log(arrayY[i]);
}