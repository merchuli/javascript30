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
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) {
    // Stop the function from running when they are not moused down
    return;
  }
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);  // start from
  ctx.lineTo(e.offsetX, e.offsetY);  // go to
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue = (hue + 1)%360;

  direction = (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) ? !direction : direction;
  ctx.lineWidth = direction ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
}

// Track the mouse behavior
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);




