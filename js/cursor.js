let size = 42;
let fill_color = "black";
let stroke_color = "white";
let x = 0;
let y = 0;
friction = 0.58;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    //frameRate(60);
    
}

function draw() {
    background(0, 35);
    updateCursor();
   
}

function updateCursor() {
    
    stroke(stroke_color);

    x+= (mouseX - x) * friction;
    y+= (mouseY - y) * friction;
    ellipse(x, y, size, size);    
  
}