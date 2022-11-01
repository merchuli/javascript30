const canvas = document.querySelector('#my-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw on the context
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;


let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) {
    // Stop the function from running when they are not moused down
    return;
  }
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);  // start from
  ctx.lineTo(e.offsetX, e.offsetY);  // go to
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Track the mouse behavior
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);




