const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

//mouse down start drawing
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX; // offsetX canvas's left edge to current mouse position cordinate;
  lastY = e.offsetY;
  console.log(lastX, lastY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.beginPath(); // new drawing path, so previous lines/shapes don’t connect to the new one
  ctx.moveTo(lastX, lastY); // so previous lines/shapes don’t connect to the new one
  ctx.lineTo(e.offsetX, e.offsetY); // Creates a straight line from the current position to (e.offsetX, e.offsetY).
  ctx.stroke(); // draws the line on the canvas

  lastX = e.offsetX;
  lastY = e.offsetY;
});

// mouse up → stop drawing
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

// mouse leaves canvas → stop drawing
canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});
