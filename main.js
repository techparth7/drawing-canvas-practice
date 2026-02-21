const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("colorPicker");
const lineWidthInput = document.querySelector("#lineWidth");
const clearBtn = document.getElementById("clearBtn");
const penBtn = document.getElementById("penBtn");
const eraserBtn = document.getElementById("eraserBtn");
const saveBtnPng = document.getElementById("saveBtnPng");
const saveBtnImg = document.getElementById("saveBtnImg");

const ctx = canvas.getContext("2d");

//default value
ctx.strokeStyle = colorPicker.value; //strokeStyle = color of the stock
ctx.lineWidth = lineWidthInput.value;
ctx.lineCap = "round";
let currentTool = "pen";
let penColor = colorPicker.value;

//drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

penBtn.addEventListener("click", () => {
  currentTool = "pen";
  ctx.strokeStyle = colorPicker.value;
});

eraserBtn.addEventListener("click", () => {
  currentTool = "eraser";
  ctx.strokeStyle = "white"; // canvas background color;
});

colorPicker.addEventListener("change", (e) => {
  penColor = e.target.value;
  if (currentTool === "pen") {
    ctx.strokeStyle = penColor;
  }
});

lineWidthInput.addEventListener("change", (e) => {
  ctx.lineWidth = e.target.value;
});

//mouse down start drawing
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX; // offsetX canvas's left edge to current mouse position cordinate;
  lastY = e.offsetY;
  //console.log(lastX, lastY);
});

//mouse move
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.beginPath(); // new drawing path, so previous lines/shapes don’t connect to the new one
  ctx.moveTo(lastX, lastY); // so previous lines/shapes don’t connect to the new one
  ctx.lineTo(e.offsetX, e.offsetY); // Creates a straight line from the current position to (e.offsetX, e.offsetY).
  ctx.stroke(); // draws the line on the canvas

  lastX = e.offsetX;
  lastY = e.offsetY;
});

// mouse up stop drawing
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

// mouse leaves canvas stop drawing
canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

//download img
saveBtnPng.addEventListener("click", () => {
  const dataURL = canvas.toDataURL("image/png"); // turns the drawing into a long text string that represents the image, turn drawing into a picture file

  const now = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0];
  const link = document.createElement("a"); //create a a tag
  link.href = dataURL; // add link
  link.download = `drawing-${now}.png`; // download name
  link.click(); // we preatend it like "a"  tag was clicked and download it
});

saveBtnImg.addEventListener("click", () => {
  const ctx = canvas.getContext("2d");

  // Save current canvas
  ctx.save();

  // Draw background
  ctx.globalCompositeOperation = "destination-over";
  ctx.fillStyle = "#ffffff"; // white background
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Export JPEG
  const dataURL = canvas.toDataURL("image/jpeg", 0.9);

  // Restore canvas state
  ctx.restore();

  const now = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0];
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = `drawing-${now}.jpg`;
  link.click();
});

//clear the canvas
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
