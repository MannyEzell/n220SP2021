let luigi =  {
    x : 50,
    y : 50,
    r : 10, 
    color1 : [0, 0, 255], 
    update: function() {
        fill(this.color1),
        circle(this.x, this.y, this.r);
    }
    
}

function setup() {
    createCanvas(400,300);
    background(0);
}

function draw() {
    background(0); 
    luigi.update();
    if (keyCode == LEFT_ARROW) {
        luigi.x = luigi.x - 5;
    } else if (keyCode == RIGHT_ARROW) {
        luigi.x = luigi.x + 5;
    } else if (keyCode == DOWN_ARROW) {
        luigi.y = luigi.y + 5;
    } else if (keyCode == UP_ARROW) {
        luigi.y = luigi.y - 5;
    }
}