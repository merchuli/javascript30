let pressed = [];
const secretCode = 'merchu';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(0, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    document.body.style.backgroundColor = '#ffeb3b';
  }
});