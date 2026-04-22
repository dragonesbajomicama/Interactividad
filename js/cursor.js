let size = 42;
let fillColor = "black";
let strokeColor = "white";

let x = 0;
let y = 0;
let friction = 0.58;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255, 255, 255, 3);
  updateCursor();
}

function updateCursor() {
  x += (mouseX - x) * friction;
  y += (mouseY - y) * friction;

  // Detectar esquina según posición
  let corner = "";

  if (x < width / 2 && y < height / 2) {
    corner = "1"; // arriba izquierda
  } else if (x >= width / 2 && y < height / 2) {
    corner = "2"; // arriba derecha
  } else if (x < width / 2 && y >= height / 2) {
    corner = "3"; // abajo izquierda
  } else {
    corner = "4"; // abajo derecha
  }

  // Switch case para color
  switch (corner) {
    case "1":
      fillColor = "red";
      size = 50;
      ellipse(x, y, size, size);
      break;

    case "2":
      fillColor = "blue";
      rect(x, y, size, size);
      size = 30;
      break;

    case "3":
      fillColor = "green";
      size = 70;
      rect(x, y, size, size);
      break;

    case "4":
      fillColor = "yellow";
      size = 90;
      ellipse(x, y, size, size);
      break;

    default:
      fillColor = "white";
      size = 42;
      break;
  }

  fill(fillColor);
  
}

