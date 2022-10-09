const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  /**
   * the propertyName of flex-grow is different from different browsers
   * Safari transitionend event.propertyName === flex
   * Chrome and Firefox transitionend event.propertyName === flex-grow
   * */
  if (['flex', 'flex-grow'].includes(e.propertyName)) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
});

panels.forEach((panel) => {
  panel.addEventListener('transitionend', toggleActive);
});