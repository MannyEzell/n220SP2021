let myArray = [ "#ff8daa", "#f6e2b3", "#7e6651" ];
var squareY = 10

function setup() {
    createCanvas(400,300);
    background(100);
    console.log(myArray[2]);
}

function draw() {

    background(100);

    for( var i = 0; i < myArray.length; i++ ) {
        fill(myArray[i]);
        rect(20, i * 25 , 100, 25);
    }

}