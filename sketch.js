function setup() {
    createCanvas(811, 600);
    background("black");
  }
  
  function draw() {
    stroke("blue")
    fill("red")
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35)
    }
  }