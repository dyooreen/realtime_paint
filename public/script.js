let socket;
let color;
function setup() {
  color = "#f6a6df";
  noStroke();
  createCanvas(window.innerWidth, window.innerHeight);
  background("grey");
  socket = io.connect("https://ankankhateseli-realtimepaint.up.railway.app");
}
function draw() {
  socket.on("mouse", (data) => {
    rectMode(CENTER);
    fill(color);
    ellipse(data.x, data.y, 40, 40);
  });
}
function mouseDragged() {
  fill("black");
  ellipse(mouseX, mouseY, 50, 50);
  socket.emit("mouse", {
    x: mouseX,
    y: mouseY,
    color: color,
  });
}
