# 🎨 Drawing App (HTML Canvas)

A simple and interactive drawing application built using **HTML5 Canvas** and **Vanilla JavaScript**.  
This project allows users to draw on a canvas using a pen or eraser, change colors and line width, clear the canvas, and save their drawing as a PNG image.

---

## ✨ Features

- ✏️ Freehand drawing using mouse
- 🖌️ Pen and eraser tools
- 🎨 Color picker for pen color
- 📏 Adjustable line width
- 🧹 Clear canvas button
- 💾 Download drawing as a PNG image
- 🕒 Auto-generated filename with timestamp

---

## 🛠️ Technologies Used

- HTML5 Canvas
- JavaScript (Vanilla)
- CSS (for layout and styling)

---

## 🚀 How It Works

1. **Pen Tool**
   - Draws on the canvas using the selected color and line width.

2. **Eraser Tool**
   - Draws using the canvas background color to simulate erasing.

3. **Drawing Logic**
   - Drawing starts on `mousedown`
   - Continues on `mousemove`
   - Stops on `mouseup` or when the mouse leaves the canvas

4. **Save Drawing**
   - Converts the canvas to a PNG image using `toDataURL()`
   - Automatically downloads the image with a timestamped filename

---

## 📂 Project Structure

├── index.html
├── style.css
├── script.js
└── README.md

---

## 🧪 How to Run

1. Clone the repository:

   ```bash
    https://github.com/techparth7/drawing-canvas-practice.git

   ```

2. Open index.html in your browser.

That’s it — no build tools or dependencies required!
