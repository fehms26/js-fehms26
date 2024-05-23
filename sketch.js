function setup() {
  createCanvas(600, 600);
  background("yellow")
}

function draw() {
 stroke("black");
  fill("red");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
}
  
}
