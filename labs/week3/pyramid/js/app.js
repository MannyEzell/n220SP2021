let i = 0;

function setup() {
    createCanvas(400,300);
    background(100);
}

function draw() {
    background(100);
    noFill();

    for(var i = 0; i < 5; i++){
        rect(i*25, 155, 20);
        for(var x = 0; x < 4; x++){
            rect(x*25, 130, 20);
            for(var y = 0; y < 3; y++){
                rect(y*25, 105, 20);
                for(var z = 0; z < 2; z++){
                    rect(z*25, 80, 20);
                    for(var w = 0; w < 1; w++){
                        rect(w*25, 55, 20);
                    }
                }
            }
        }
    }
}
