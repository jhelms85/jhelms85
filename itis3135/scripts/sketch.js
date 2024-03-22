let drawing = false;
let lastX;
let lastY;

function setup() {
    createCanvas(900, 300);
    background(255);
    const clearButton = document.getElementById("clear-btn");
    clearButton.addEventListener("click", clearCanvas);
  }
  
function draw() {
    if (drawing) {
        stroke(0); 
        strokeWeight(4); 
        line(lastX, lastY, mouseX, mouseY); 
        lastX = mouseX; 
        lastY = mouseY; 
    }
cursor(CROSS);
}

function mousePressed() {
    drawing = true;
    lastX = mouseX;
    lastY = mouseY;
  }

  function mouseReleased() {
    drawing = false;
  }

  function clearCanvas() {
    background(255);
  }