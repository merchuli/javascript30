const canvas = document.querySelector('#my-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw on the context
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';


let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) {
    // Stop the function from running when they are not moused down
    return;
  }
  console.log(e);
}

// Track the mouse behavior
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);




