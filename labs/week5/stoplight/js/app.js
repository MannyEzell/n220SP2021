let myArray = [ "#fc0303", "#fcfc03", "#2dfc03" ]
var y = 200;

function setup() {
    createCanvas(400,300);
    background(100);
    console.log(myArray[2]);
}

function draw(){

    background(100);

    for( var i = 0; i < myArray.length; i++ ) {
        fill(myArray[i]);
        circle(y, i * 70, 50);
    }
}


